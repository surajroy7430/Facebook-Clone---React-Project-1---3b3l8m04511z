import React, { useState } from "react";
import './Posts.css';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  Button,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Input,
} from "@mui/material";
import { Close, ModeCommentOutlined, Share, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useAuth } from "../../utils/AuthStateContext";
import { deletePostsApi } from "../../utils/APIs";
import { toast } from "react-toastify";

const UsersPosts = ({ postData, onDeletePost }) => {
    const { _id, content, images } = postData;
  const { user } = useAuth();
  const token = localStorage.getItem("authToken");
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState(0);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleLikes = async () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }

  const [isCommenting, setIsCommenting] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleCommentInputChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const updatedCommentList = [newComment, ...commentList];
      setComment(comment+1)
      setCommentList(updatedCommentList);
      setNewComment(""); // Clear the input field
    }
  };

  const deletePost = async () => {
    try {
      await deletePostsApi(_id, token);
      onDeletePost(_id);
      toast.success("Deleted")
    } catch (error) {
    //   console.log("Error: ", error);
      toast.error(error)
    }
  }

  return (
    <Card sx={{ margin: 4 }} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar src={user && user.profileImage} alt='' />
        }
        action={
          <IconButton aria-label="delete" title='Delete' onClick={deletePost}>
            <Close />
          </IconButton>
        }
        title={user && user.name}
        subheader={new Date().toDateString()}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <div>
        {images && images.map((image, i) => (
            <div key={i+1} style={{display: 'flex', flexWrap: 'wrap'}}>
                <CardMedia component='img' height="20%" image={image} />
            </div>
        ))}
      </div>
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography color="text.primary" className="likesCount">
          {like > 0 ? `${like} liked` : null}
        </Typography>
        <Typography color="text.primary" className="commentsCount">
          {comment > 0 ? `${comment} comments` : null}
        </Typography>
      </CardContent>
      {like || comment > 0 ? <Divider /> : null }
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button aria-label="like">
          <Checkbox
            icon={<ThumbUpOutlined />}
            checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
            onClick={handleLikes}
          /> Like
        </Button>
        <Button aria-label="comment" onClick={() => setIsCommenting(!isCommenting)}>
          <ModeCommentOutlined />&nbsp;Comment
        </Button>
        <Button aria-label="share">
          <Share />&nbsp;Share
        </Button>
      </CardActions>
        {isCommenting && (
          <CardContent>
            <Typography variant="div" style={{ margin: "5px 0", display: 'flex' }}>
              <Input
                value={newComment}
                onChange={handleCommentInputChange}
                placeholder="Add a comment..."
                fullWidth
              />
              <Button onClick={handleAddComment} variant="contained" color="primary" style={{ marginTop: "10px" }}>
                Add
              </Button>
            </Typography>
          </CardContent>
        )}
        {commentList.length > 0 && (
          <CardContent>
            <Divider sx={{marginBottom: '5px'}} />
            <List sx={{marginLeft: '15px'}}>
              {commentList.map((comment, i) => (
                <ListItem key={i}>
                  <Avatar src={user && user.profileImage} alt={user && user.name}  />
                  <ListItemText sx={{marginLeft: '10px'}}>
                    <Typography sx={{fontWeight: '600'}}>{user && user.name}</Typography>
                    <Typography>{comment}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </CardContent>
        )}
    </Card>
  );
};

export default UsersPosts;
