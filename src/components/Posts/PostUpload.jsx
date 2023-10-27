import {
    Avatar,
    Button,
    ButtonGroup,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Tooltip,
    Typography,
    Container,
    Grid,
  } from "@mui/material";
import React, { useState } from "react";
import { AddAPhoto, Add as AddIcon, EmojiEmotions, Image, LiveTv, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from "@mui/system";
  
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
    const [open, setOpen] = useState(false);
    return (
      <>
      <Container maxWidth="sm">
      <Box
            width={500}
            variant='outlined'
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            m={3}
            borderRadius={3}
            border={1}
            onClick={(e) => setOpen(true)}
          >
            <UserBox>
              <Avatar
                // sx={{ width: 30, height: 30 }}
              />
              <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={`What's on your mind, ${'displayName'}?`}
                  />
            </UserBox>
            <Stack direction="row" gap={1} justifyContent='space-between'>
            <Grid item>
                    <Button >
                      <LiveTv /> Live video
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button >
                      <AddAPhoto /> Photo/Video
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button >
                      <EmojiEmotions /> Feeling/Activity
                    </Button>
                    </Grid>
            </Stack>
          </Box>
    </Container>
        {/* <Tooltip
          onClick={(e) => setOpen(true)}
          title="Post"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50% - 25px)", md: 30 },
          }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip> */}
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
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                NAME
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