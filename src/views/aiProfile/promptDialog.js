import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, IconButton, TextField, Button, DialogActions, InputLabel, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PromptDialog = (props) => {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      maxWidth="lg"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={{ marginBottom: '1rem' }} id="alert-dialog-title">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputLabel horizontal>
              <Typography variant='h4'>Subject</Typography>
            </InputLabel>
            <TextField id="outlined-basic1" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <InputLabel horizontal>
              <Typography variant='h4'>Target Audience</Typography>
            </InputLabel>
            <TextField id="outlined-basic1" fullWidth />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PromptDialog;
