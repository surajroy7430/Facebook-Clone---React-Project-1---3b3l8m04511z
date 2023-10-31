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
} from "@mui/material";
import { ModeCommentOutlined, MoreVert, Share, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import { useAuth } from "../../utils/AuthStateContext";
import { PostLikeApi } from "../../utils/APIs";

const Posts = (props) => {
  const { _id, likeCount, commentCount, content,
    author: { name, profileImage } = {},
    channel,
  } = props;

  const { user } = useAuth();
  const [like, setLike] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState(0);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  const handleLikes = async () => {
  const authToken = localStorage.getItem('authToken');
    try {
      // Call API to like/unlike the post
      await PostLikeApi(_id, authToken);

      // Update local state based on the API response
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  }

  return (
    <Card sx={{ margin: 4 }} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar src={profileImage} alt={name} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader="22 August, 2023"
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
        <Typography color="text.primary" className="commentsCount">
          {commentCount > 0 ? `${commentCount} comments` : null}
        </Typography>
      </CardContent>
      {like || commentCount > 0 ? <Divider /> : null }
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button aria-label="like">
          <Checkbox
            icon={<ThumbUpOutlined />}
            checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
            onClick={handleLikes}
          /> Like
        </Button>
        <Button aria-label="comment">
          <ModeCommentOutlined />&nbsp;Comment
        </Button>
        <Button aria-label="share">
          <Share />&nbsp;Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Posts;
