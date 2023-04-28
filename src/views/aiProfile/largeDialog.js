import { Dialog, DialogTitle, DialogContent, Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import PromptDialog from './promptDialog';
import { useDispatch, useSelector } from 'store';
import { setEditPrompt, setTheTask, setUpdatePrompt } from 'store/slices/agents';

const LargeDialog = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  // const [promptOpen, setPromptOpen] = useState(false);
  const [task, setTask] = useState("");
  const { open, setOpen, tasks } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      maxWidth="lg"
      fullWidth
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
      <DialogContent sx={{ padding: '6rem' }}>
        <Grid container spacing={12}>
          {tasks.map((task, i) => (
            <Grid key={i} item xs={12} lg={4} md={6}>
              <Button
                onClick={() => {
                  // setPromptOpen(true);
                  dispatch(setEditPrompt(true));
                  dispatch(setUpdatePrompt(false));
                  dispatch(setTheTask(task));
                  setTask(task);
                }}
                sx={{ borderRadius: theme.shape.borderRadius, boxShadow: theme.customShadows.primary, width: '100%', height: '7rem', fontSize: "20px", marginBottom: '1rem' }}
                variant="contained"
                size="large"
              >
                {task.name}
              </Button>
              <Typography variant='caption'>
                {task.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      {/* <PromptDialog task={task} setModalClose={setOpen} /> */}
    </Dialog>
  );
};

export default LargeDialog;
