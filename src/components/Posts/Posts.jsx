import React, { useState } from "react";
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

const Posts = () => {
  const { user } = useAuth();
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Card sx={{ margin: 4, width: '500px' }} variant='outlined'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe"></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="NME"
        subheader="September 14, 2022"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography color="text.primary">
          {likeCount > 0 ? `${likeCount} liked` : null}
        </Typography>
        <Typography color="text.primary">
          {commentCount > 0 ? `${commentCount} comments` : null}
        </Typography>
      </CardContent>
      {likeCount || commentCount > 0 ? <Divider /> : null }
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button aria-label="like">
          <Checkbox
            icon={<ThumbUpOutlined />}
            checkedIcon={<ThumbUp sx={{ color: "blue" }} />}
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
