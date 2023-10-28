import {
    Avatar,
    Button,
    ButtonGroup,
    Modal,
    Stack,
    styled,
    TextField,
    Typography,
    Container,
    Grid,
  } from "@mui/material";
import React, { useState } from "react";
import { Collections, EmojiEmotions, Image, LiveTv, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useAuth } from "../../utils/AuthStateContext";
  
const SytledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
  
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});
  
const PostUpload = () => {
  const { user } = useAuth();
    const [open, setOpen] = useState(false);
    return (
      <>
      <Container maxWidth="sm">
      <Box
            variant='outlined'
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            m={3}
            borderRadius={3}
            border={1}
          >
            <UserBox>
              <Avatar
                src={user && user.profileImage}
              />
              <TextField
                fullWidth
                variant="outlined"
                sx={{borderRadius: '30px'}}
                placeholder={`What's on your mind, ${user && user.name}?`}
                onClick={(e) => setOpen(true)}
              />
            </UserBox>
            <Stack direction="row" gap={1} justifyContent='space-between'>
              <Grid item>
                <Button onClick={(e) => setOpen(true)}>
                  <LiveTv sx={{color: 'red'}} />&nbsp;<span style={{color: 'gray'}}>Live video</span>
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={(e) => setOpen(true)}>
                  <Collections sx={{color: 'green'}} />&nbsp;<span style={{color: 'gray'}}>Photo/Video</span>
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={(e) => setOpen(true)}>
                  <EmojiEmotions sx={{color: 'yellow'}} />&nbsp;<span style={{color: 'gray'}}>Feeling/Activity</span>
                </Button>
              </Grid>
            </Stack>
          </Box>
    </Container>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={300}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={3}
          >
            <Typography variant="h6" color="gray" textAlign="center">
              Create post
            </Typography>
            <UserBox>
              <Avatar
                src={user && user.profileImage}
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                {user && user.name}
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Post</Button>
            </ButtonGroup>
          </Box>
        </SytledModal>
      </>
    );
  };
  
  export default PostUpload;