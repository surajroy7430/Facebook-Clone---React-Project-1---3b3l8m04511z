import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Modal, 
  TextField, 
  Typography, 
  styled 
} from "@mui/material";
import { createPageApi } from "../../utils/APIs";
import { toast } from "react-toastify";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Pages = ({open, onClose}) => {
  const [pageName, setPageName] = useState('');
  const [category, setCategory] = useState('');
  const [bio, setBio] = useState('');
    
  const handleClose = () => {
    onClose(); 
  };

  const handleCreatePage = async () => {
    try {
      // Prepare the page data
      const pageData = {
          name: pageName,
          category: category,
          bio: bio,
      };

      // Make the API call
      const token = localStorage.getItem("authToken");
      const response = await createPageApi(pageData, token);

      console.log("Page created successfully!", response);
      toast("Page created successfully!");

      handleClose();
    } catch (error) {
      // console.error("Error creating page:", error);
      toast.error(error);
    }
  };

  return (
    <SytledModal
      open={open}
      onClose={handleClose}
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
        <Typography variant="h5" color="gray" textAlign="center" sx={{fontWeight: 600}}>
          Create a Page
        </Typography>
        <Typography variant="body2" color="gray" textAlign="center" marginBottom={2}>
          Your Page is where people go to learn more about you.
        </Typography>
        <TextField
          fullWidth
          required
          placeholder="Page Name (required)"
          variant="outlined"
          helperText="Name of your business, brand or organisation, or a name that helps explain your Page"
          sx={{marginBottom: '10px'}}
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        />
        <TextField
          fullWidth
          required
          placeholder="Category (required)"
          variant="outlined"
          helperText="Enter a category that best describe you."
          sx={{marginBottom: '10px'}}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          fullWidth
          sx={{ width: "100%" }}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Bio (optional)"
          variant="outlined"
          style={{marginBottom: '20px'}}
          helperText="Tell people a little about what you do."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button 
          fullWidth
          variant="contained" 
          onClick={handleCreatePage}
        >Create Page</Button>
      </Box>
    </SytledModal>
  )
}

export default Pages
