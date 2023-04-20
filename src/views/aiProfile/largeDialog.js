import { Dialog, DialogTitle, DialogContent, Button, Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import PromptDialog from './promptDialog';

const LargeDialog = (props) => {
  const theme = useTheme();
  const [promptOpen, setPromptOpen] = useState(false);
  const [task, setTask] = useState("");
  const { open, setOpen } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const tasks = [{
    name: "Video Titles",
    task: "youtubeTitle",
    formFields: [
      { name: "Topic", value: "topic" },
      { name: "Number of titles", value: "titles" }
    ],
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Video Scripts",
    task: "youtubeScript",
    formFields: [
      { name: "Topic", value: "topic" },
      { name: "Number of words", value: "words" }
    ],
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Video Description",
    task: "youtubeDescription",
    formFields: [
      { name: "Topic", value: "topic" }
    ],
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Channel Description",
    task: "youtubeChannelDescription",
    formFields: [
      { name: "Topic", value: "topic" },
      { name: "Number of titles", value: "titles" }
    ],
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Keyword Generator Long",
    task: "youtubeLongKeyword",
    formFields: [
      { name: "Topic", value: "topic" },
      { name: "Number of titles", value: "titles" }
    ],
    text: "Generate [amount of ideas] ideas for a youtube video title about [topic] with a mix of keywords that the people of [topic] finds interesting."
  }, {
    name: "Keyword Generator Short",
    task: "youtubeShortKeyword",
    formFields: [
      { name: "Topic", value: "topic" },
      { name: "Number of titles", value: "titles" }
    ],
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
              <Button
                onClick={() => {
                  setPromptOpen(true);
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
      <PromptDialog open={promptOpen} task={task} setOpen={setPromptOpen} setModalClose={setOpen} />
    </Dialog>
  );
};

export default LargeDialog;
