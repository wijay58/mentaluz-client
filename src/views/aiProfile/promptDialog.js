import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, IconButton, TextField, Button, DialogActions, InputLabel, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'store';
import { youtube, setLoading, setEditPrompt, setLastPrompt, setUpdatePromptTask } from 'store/slices/agents';

const PromptDialog = (props) => {
  const { setModalClose } = props;
  const { editPrompt, task, prompt, updatePrompt, updatePromptTask } = useSelector((state) => state.agents);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setEditPrompt(false));
  };

  const makeRequest = async (e) => {
    e.preventDefault();
    const fields = {};
    let data;
    if (updatePrompt) {
      updatePromptTask.formFields.forEach((field) => {
        fields[field.value] = e.target[field.value].value;
      });
      data = {
        data: fields,
        task: updatePromptTask.task,
      };
      dispatch(setUpdatePromptTask(updatePromptTask));
    } else {
      task.formFields.forEach((field) => {
        fields[field.value] = e.target[field.value].value;
      });
      data = {
        data: fields,
        task: task.task,
      };
      dispatch(setUpdatePromptTask(task));
    }
    dispatch(setLastPrompt(fields));
    setModalClose(false);
    dispatch(setLoading(true));
    await dispatch(youtube(data));
    dispatch(setLoading(false));
  };

  return (
    <Dialog
      maxWidth="lg"
      open={editPrompt}
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
          {updatePrompt ? (
            <Grid container spacing={2}>
              {updatePromptTask.formFields.map((field) => (
                <Grid item xs={12}>
                  <InputLabel horizontal>
                    <Typography variant='h4'>{field.name}</Typography>
                  </InputLabel>
                  <TextField defaultValue={prompt ? prompt[field.value] : ""} name={field.value} id="outlined-basic1" fullWidth />
                </Grid>
              ))}
            </Grid>
          ) : (
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
          )}
        </DialogContent>
        <DialogActions>
          <Button type='submit' onClick={handleClose}>Submit</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PromptDialog;
