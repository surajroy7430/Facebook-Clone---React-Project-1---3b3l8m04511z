import React, { useState } from 'react'
import '../styles/ImageUpload.css';
import { Dialog } from '@mui/material';
import {ReactComponent as DefaultProfile} from '../assets/profile.svg'

function ImageUpload() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [noLikes, setNoLikes] = useState(0);
    const [scroll, setScroll] = useState('paper');


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        setImageURL(URL.createObjectURL(e.target.files[0]));
    };

    const uploadFileWithClick = () => {
        document.getElementsByClassName('four')[0].click();
    }

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        setImage("");
        setImageURL("");
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleUpload = (event) => {
        if (document.getElementsByClassName('hidden')[0]) {
            document.getElementsByClassName('hidden')[0].classList.remove('hidden');
        }
        document.getElementsByClassName('postButton').disabled = true;
        document.getElementsByClassName('postButton')[0].classList.add('disabled');

        if (caption == "" && imageURL == "") {
            console.log("Prevented Access to Photo or Caption Submission")
        } else {
            event.preventDefault();
            // if (imageURL == '') {
            //     db.collection("posts").add({
            //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //         caption: caption,
            //         imageUrl: "",
            //         noLikes: noLikes,
            //         username: user?.displayName,
            //         uid: user?.uid
            //     });
            //     handleClose();
            //     setProgress(0);
            //     setCaption("");
            //     setImage(null);
            // } else {
            //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
            //     uploadTask.on(
            //         "state_changed",
            //         (snapshot) => {
            //             const progress = Math.round(
            //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            //             );
            //             setProgress(progress);
            //         },
            //         (error) => {
            //             console.log(error);
            //             alert(error.message);
            //         },
            //         () => {
            //             storage
            //                 .ref("images")
            //                 .child(image.name)
            //                 .getDownloadURL()
            //                 .then(url => {
            //                     db.collection("posts").add({
            //                         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //                         caption: caption,
            //                         imageUrl: url,
            //                         noLikes: noLikes,
            //                         username: user?.displayName,
            //                         uid: user?.uid
            //                     });
            //                     handleClose();
            //                     setProgress(0);
            //                     setCaption("");
            //                     setImage(null);
            //                 })
            //         }
            //     )
            // }
        }

    }

    return (
        <div className="imageupload">
            <div class="imageupload__container">
                <div class="postArea">
                    <img src={'photoURL'} class="Avatar" />
                    <input value={caption} onClick={handleClickOpen('body')} placeholder={`What's on your mind, ${'displayName'}?`} />
                </div>
                <div class="hr" />
                <div class="options">
                    <div class="liveVideo" onClick={handleClickOpen('body')}>
                        <i class="liveVideoIcon1" />
                        <h2>Live video</h2>
                    </div>
                    <div class="photo" onClick={handleClickOpen('body')}>
                        <i class="photoIcon1" />
                        <h2>Photo/Video</h2>
                    </div>
                    <div class="feeling" onClick={handleClickOpen('body')}>
                        <i class="feelingIcon1" />
                        <h2>Feeling/Activity</h2>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}>
                <form method='POST'>
                    <div class="makeStyles-paper-1">
                        <div class="modalInit">
                            <h1>Create Post</h1>
                            <div class="close">
                                <div className='closeIcon'>
                                    <i class="closeModalIcon" onClick={handleClose} />
                                </div>
                            </div>
                        </div>
                        <div class="hr2" />
                        <div class="profileHead">
                            <img src={'photoURL'} className="Avatar" />
                            <h1>{'displayName'}</h1>
                        </div>
                        <div class="inputForUpload">
                            <input onChange={handleChange} type="file" accept="image/*" className='four' />
                            <textarea autoFocus value={caption} onChange={(e) => setCaption(e.target.value)} rows="4" placeholder={`What's on your mind, ${'displayName'}?`} />
                        </div>
                        <div class={`previewImage ${!image && "vanish"}`}>
                            <img src={imageURL} className="previewImaage" />
                        </div>
                        <div class="colorAndEmoji">
                            <img alt="" class="colorAlpha" src="https://facebook.com/images/composer/SATP_Aa_square-2x.png"></img>
                            <i className='emoji' />
                        </div>
                        <progress value={progress} className="hidden" max="100" />

                        <div className="publishOptions">
                            <div class="left">
                                <h1>Add to your post</h1>
                            </div>
                            <div class="right">
                                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png' class="Icon photoIcon2" onClick={uploadFileWithClick} title='Photo/video' />
                                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png' class="Icon tagIcon" title='Tag people' />
                                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png' class="Icon feelingIcon2" title='Feeling/activity' />
                                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png' class="Icon locationIcon" title='Check in' />
                                <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png' class="Icon gifIcon" title='GIF' />
                                <i class="Icon moreIcon2" title='More' />
                            </div>
                        </div>
                        <button onClick={handleUpload} type="submit" class={`postButton ${caption.length < 1 && "disabled"} ${imageURL != "" && "visible"}`}>Post</button>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default ImageUpload