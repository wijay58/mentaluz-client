import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, IconButton, TextField, Button, DialogActions, InputLabel, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'store';
import { youtube, setLoading } from 'store/slices/agents';

const PromptDialog = (props) => {
  const { open, setOpen, task, setModalClose } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const makeRequest = async (e) => {
    e.preventDefault();
    const fields = {};
    task.formFields.forEach((field) => {
      console.log(field);
      fields[field.value] = e.target[field.value].value;
      console.log(fields);
    });
    const data = {
      task: task.task,
      data: fields
    };
    setModalClose(false);
    dispatch(setLoading(true));
    await dispatch(youtube(data));
    dispatch(setLoading(false));
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
      <form onSubmit={makeRequest}>
        <DialogContent>
          <Grid container spacing={2}>
            {task ? task.formFields.map((field) => (
              <Grid item xs={12}>
                <InputLabel horizontal>
                  <Typography variant='h4'>{field.name}</Typography>
                </InputLabel>
                <TextField name={field.value} id="outlined-basic1" fullWidth />
              </Grid>
            )) : null}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={handleClose}>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PromptDialog;
