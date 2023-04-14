import { Dialog, DialogTitle, DialogContent, Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import PromptDialog from './promptDialog';

const LargeDialog = (props) => {
  const theme = useTheme();
  const [promptOpen, setPromptOpen] = useState(false);
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const tasks = [{
    name: "Video Titles",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Video Scripts",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Video Description",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Channel Description",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Keyword Generator Long",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Keyword Generator Short",
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }];
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
              <Button onClick={() => setPromptOpen(true)} sx={{ borderRadius: theme.shape.borderRadius, boxShadow: theme.customShadows.primary, width: '100%', height: '7rem', fontSize: "20px", marginBottom: '1rem' }} variant="contained" size="large">
                {task.name}
              </Button>
              <Typography variant='caption'>
                {task.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <PromptDialog open={promptOpen} setOpen={setPromptOpen} />
    </Dialog>
  );
};

export default LargeDialog;
