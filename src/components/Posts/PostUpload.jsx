import {
    Avatar,
    Button,
    ButtonGroup,
    Modal,
    Stack,
    styled,
    TextField,
    Typography,
    Grid,
  } from "@mui/material";
import React, { useRef, useState } from "react";
import { Collections, EmojiEmotions, Image, LiveTv, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useAuth } from "../../utils/AuthStateContext";
import { toast } from "react-toastify";
import { createPostsApi } from "../../utils/APIs";
import UsersPosts from "./UsersPosts";
  
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
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [uploadedPost, setUploadedPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const selectedImagesArray = Array.from(files);
    setSelectedImages(selectedImagesArray);

    // Display selected images below the text field
    const urls = selectedImagesArray.map((file) => URL.createObjectURL(file));
    setImageUrls(urls);
  };

  const handlePostUpload = async () => {
    try {
        // Prepare the post data
        const postData = new FormData();
        selectedImages.forEach((image) => {
          postData.append("images", image);
        });
        postData.append("title", postContent);
        postData.append("content", postContent);

        // Make the API call
        const token = localStorage.getItem("authToken");
        const response = await createPostsApi(postData, token);

        // console.log("posted successfully!", response);
        toast("posted successfully!");

        setUploadedPost([response, ...uploadedPost]);
        setOpen(false)

        // Clear state after successful post
        setPostContent('');
        setSelectedImages([]);
        setImageUrls([]);

    } catch (error) {
        console.error("Error uploading post:", error);
        toast.error(error);
    }
  };

  // Function to delete a post
  const handleDeletePost = (postId) => {
    // Filter out the deleted post from the posts array
    const updatedPosts = posts.filter((post) => post._id !== postId);
    // Update the state with the filtered posts
    setPosts(updatedPosts);
  };

    return (
      <>
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
          <Stack direction="row"  justifyContent='space-between'>
            <Grid item>
              <Button onClick={(e) => setOpen(true)}>
                <LiveTv sx={{color: 'red'}} />&nbsp;<span style={{color: 'gray'}}>Live video</span>
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={(e) => setOpen(true)}>
                <Collections sx={{color: 'green'}} />&nbsp;<span style={{color: 'gray'}}>Photo / Video</span>
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={(e) => setOpen(true)}>
                <EmojiEmotions sx={{color: 'yellow'}} />&nbsp;<span style={{color: 'gray'}}>Feeling / Activity</span>
              </Button>
            </Grid>
          </Stack>
        </Box>
        <SytledModal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
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
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
            {imageUrls.map((url, i) => (
              <img 
                key={i+1} 
                src={url} 
                alt={`selected-image-${i}`} 
                width="100" 
                height="100" 
              />
            ))}
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <Button>
                <EmojiEmotions color="primary" />
              </Button>
              <div style={{ display: "none" }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileInputChange}
                  multiple
                />
              </div>
              <Button onClick={() => fileInputRef.current.click()}>
                <Image color="secondary" />
              </Button>
              <Button>
                <VideoCameraBack color="success" />
              </Button>
              <Button>
                <PersonAdd color="error" />
              </Button>
            </Stack>
            <ButtonGroup
              fullWidth
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button onClick={handlePostUpload}>Post</Button>
            </ButtonGroup>
          </Box>
        </SytledModal>
        {uploadedPost && uploadedPost.map((post) => (
          <UsersPosts key={post._id} postData={post} onDeletePost={handleDeletePost} />
        ))}
      </>
    );
  };
  
  export default PostUpload;