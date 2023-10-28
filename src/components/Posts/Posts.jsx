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

const Posts = (props) => {
  const { likeCount, commentCount, content,
    author: { name, profileImage } = {},
    channel,
  } = props;

  const { user } = useAuth();
  const [lkeCount, setLikeCount] = useState(0);
  const [comCount, setCommentCount] = useState(0);
  const theme = useTheme();
  const isLG = useMediaQuery(theme.breakpoints.down('lg'));
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

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
