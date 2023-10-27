import React, { useState } from 'react'
// import '../styles/ImageUpload.css';
import {
    Avatar,
    Button,
    ButtonGroup,
    Container,
    Card,
    Fab,
    Modal,
    Stack,
    styled,
    TextField,
    Box,
    Tooltip,
    Typography,
    Grid,
  } from "@mui/material";
import { EmojiEmotions, Image, PersonAdd, VideoCameraBack, LiveTv, AddAPhoto } from "@mui/icons-material";

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

function ImageUpload({ photoURL, caption, displayName, handleClickOpen }) {
    const [postText, setPostText] = useState("");
    const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    setPostText(event.target.value);
  };
    // const [open, setOpen] = useState(false);
    // const [image, setImage] = useState('');
    // const [imageURL, setImageURL] = useState('');
    // const [caption, setCaption] = useState('');
    // const [progress, setProgress] = useState(0);
    // const [noLikes, setNoLikes] = useState(0);
    // const [scroll, setScroll] = useState('paper');


    // const handleChange = (e) => {
    //     if (e.target.files[0]) {
    //         setImage(e.target.files[0]);
    //     }
    //     setImageURL(URL.createObjectURL(e.target.files[0]));
    // };

    // const uploadFileWithClick = () => {
    //     document.getElementsByClassName('four')[0].click();
    // }

    // const handleClickOpen = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    //     setImage("");
    //     setImageURL("");
    // };

    // const descriptionElementRef = React.useRef(null);
    // React.useEffect(() => {
    //     if (open) {
    //         const { current: descriptionElement } = descriptionElementRef;
    //         if (descriptionElement !== null) {
    //             descriptionElement.focus();
    //         }
    //     }
    // }, [open]);

    // const handleUpload = (event) => {
    //     if (document.getElementsByClassName('hidden')[0]) {
    //         document.getElementsByClassName('hidden')[0].classList.remove('hidden');
    //     }
    //     document.getElementsByClassName('postButton').disabled = true;
    //     document.getElementsByClassName('postButton')[0].classList.add('disabled');

    //     if (caption == "" && imageURL == "") {
    //         console.log("Prevented Access to Photo or Caption Submission")
    //     } else {
    //         event.preventDefault();
    //     }
    // }

    return (
        <Container maxWidth="sm">
      <Box
            width={500}
            variant='outlined'
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
            borderRadius={3}
            border={1}
          >
            <UserBox>
              <Avatar
                sx={{ width: 40, height: 40 }}
              />
              <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={`What's on your mind, ${displayName}?`}
                    value={postText}
                    onChange={handleInputChange}
                  />
            </UserBox>
            <Stack direction="row" gap={1} justifyContent='space-between'>
            <Grid item>
                    <Button onClick={() => handleClickOpen('liveVideo')}>
                      <LiveTv /> Live video
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={() => handleClickOpen('photo')}>
                      <AddAPhoto /> Photo/Video
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button onClick={() => handleClickOpen('feeling')}>
                      <EmojiEmotions /> Feeling/Activity
                    </Button>
                    </Grid>
            </Stack>
          </Box>
    </Container>
        // <div className="imageupload">
        //     <div class="imageupload__container">
        //         <div class="postArea">
        //             <img src={'photoURL'} class="Avatar" />
        //             <input value={caption} onClick={handleClickOpen('body')} placeholder={`What's on your mind, ${'displayName'}?`} />
        //         </div>
        //         <div class="hr" />
        //         <div class="options">
        //             <div class="liveVideo" onClick={handleClickOpen('body')}>
        //                 <i class="liveVideoIcon1" />
        //                 <h2>Live video</h2>
        //             </div>
        //             <div class="photo" onClick={handleClickOpen('body')}>
        //                 <i class="photoIcon1" />
        //                 <h2>Photo/Video</h2>
        //             </div>
        //             <div class="feeling" onClick={handleClickOpen('body')}>
        //                 <i class="feelingIcon1" />
        //                 <h2>Feeling/Activity</h2>
        //             </div>
        //         </div>
        //     </div>

        //     <Dialog
        //         open={open}
        //         onClose={handleClose}
        //         scroll={scroll}>
        //         <form>
        //             <div class="makeStyles-paper-1">
        //                 <div class="modalInit">
        //                     <h1>Create Post</h1>
        //                     <div class="close">
        //                         <div className='closeIcon'>
        //                             <i class="closeModalIcon" onClick={handleClose} />
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="hr2" />
        //                 <div class="profileHead">
        //                     <img src={'photoURL'} className="Avatar" />
        //                     <h1>{'displayName'}</h1>
        //                 </div>
        //                 <div class="inputForUpload">
        //                     <input onChange={handleChange} type="file" accept="image/*" className='four' />
        //                     <textarea autoFocus value={caption} onChange={(e) => setCaption(e.target.value)} rows="4" placeholder={`What's on your mind, ${'displayName'}?`} />
        //                 </div>
        //                 <div class={`previewImage ${!image && "vanish"}`}>
        //                     <img src={imageURL} className="previewImaage" />
        //                 </div>
        //                 <div class="colorAndEmoji">
        //                     <img alt="" class="colorAlpha" src="https://facebook.com/images/composer/SATP_Aa_square-2x.png"></img>
        //                     <i className='emoji' title='Emoji' />
        //                 </div>
        //                 <progress value={progress} className="hidden" max="100" />

        //                 <div className="publishOptions">
        //                     <div class="left">
        //                         <h1>Add to your post</h1>
        //                     </div>
        //                     <div class="right">
        //                         <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png' class="Icon photoIcon2" onClick={uploadFileWithClick} title='Photo/video' />
        //                         <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png' class="Icon tagIcon" title='Tag people' />
        //                         <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png' class="Icon feelingIcon2" title='Feeling/activity' />
        //                         <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png' class="Icon locationIcon" title='Check in' />
        //                         <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png' class="Icon gifIcon" title='GIF' />
        //                         <i class="Icon moreIcon2" title='More' />
        //                     </div>
        //                 </div>
        //                 <button onClick={handleUpload} type="submit" class={`postButton ${caption.length < 1 && "disabled"} ${imageURL != "" && "visible"}`}>Post</button>
        //             </div>
        //         </form>
        //     </Dialog>
        // </div>
    )
}

export default ImageUpload