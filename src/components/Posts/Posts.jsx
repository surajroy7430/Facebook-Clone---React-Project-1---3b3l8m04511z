import React, { useEffect, useState } from "react";
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
  Modal,
  Box,
  Dialog,
} from "@mui/material";
import { Close, ModeCommentOutlined, Share, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useAuth } from "../../utils/AuthStateContext";
import { deletePostsApi, fetchComments } from "../../utils/APIs";
import { toast } from "react-toastify";

const Posts = (props) => {
  const { _id, likeCount, commentCount, content,
    author: { name, profileImage } = {},
    channel,
  } = props;

  const { user } = useAuth();
  const token = localStorage.getItem("authToken");
  const [like, setLike] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState(commentCount);
  const [fetchedComment, setFetchedComment] = useState([]);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
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
      setCommentList(updatedCommentList);
      setComment(comment+1);
      setNewComment(""); // Clear the input field
    }
  };

  const fetchCommentsData = async() => {
    setIsCommentModalOpen(true);
    try {
      const commentsData = await fetchComments(_id, token);

      setFetchedComment(commentsData);
      console.log('setFetchedComment', setFetchedComment);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const deletePost = async () => {
    try {
      await deletePostsApi(_id, token);
      // toast.success("Deleted")
    } catch (error) {
      // console.log("Error: ", error);
      // toast.error(error)
    }
  }

  return (
    <Card sx={{ margin: 4, border: '1px solid #c2c2c2', borderRadius: '8px' }} elevation={4}>
      <CardHeader
        avatar={
          <Avatar src={profileImage} alt='' />
        }
        action={
          <IconButton aria-label="delete" title='Delete' onClick={deletePost}>
            <Close />
          </IconButton>
        }
        title={name}
        subheader="Fri Sep 01 2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="20%"
        image={channel.image}
        alt={channel.name}
      />
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography color="text.primary" className="likesCount">
          {like > 0 ? `${like} liked` : null}
        </Typography>
        <Typography color="text.primary" className="commentsCount" onClick={fetchCommentsData}>
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
      <Dialog
        open={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, bgcolor: "background.paper", p: 3 }}>
          <Typography variant="h6" id="modal-modal-title">
            Comments
          </Typography>
          <List>
            {fetchedComment.map((comment, index) => (
              <ListItem key={index}>
                <Avatar />
                <ListItemText>
                  <Typography sx={{marginLeft: '10px'}}>{comment.content}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Dialog>
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

export default Posts;
