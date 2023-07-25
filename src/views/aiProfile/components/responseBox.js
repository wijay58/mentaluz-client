import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openSnackbar } from 'store/slices/snackbar';
import { Grid, TextField, Card, CardContent, IconButton, Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CreateIcon from '@mui/icons-material/Create';
import StarIcon from '@mui/icons-material/Star';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ChatIcon from '@mui/icons-material/Chat';
import { useTheme } from '@mui/material/styles';
import { setEditPrompt, saveFav, setUpdatePrompt } from 'store/slices/agents';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

const ResponseBox = (props) => {
  const { type } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [response, setResponse] = useState('');
  const { agentResponse, questionnaireResponse, updatePromptTask, task } = useSelector((state) => state.agents);

  useEffect(() => {
    if (type === 'agent')
      setResponse(agentResponse);
    else if (type === 'questionnaire')
      setResponse(questionnaireResponse);
  }, [agentResponse, questionnaireResponse]);

  const editPrompt = () => {
    if (updatePromptTask) {
      dispatch(setUpdatePrompt(true));
      dispatch(setEditPrompt(true));
    }
  };

  const saveFavorite = async () => {
    if (task) {
      const data = {
        task,
        response
      };
      await dispatch(saveFav(data));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Saved to Favorites',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          transition: 'SlideLeft'
        })
      );
    }
  };

  const createDoc = () => {
    if (response) {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [new TextRun({ text: response })]
              })
            ]
          }
        ]
      });
      Packer.toBlob(doc).then((blob) => {
        saveAs(blob, 'response.docx');
      });
    }
  };

  return (
    <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={9}>
            <TextField
              defaultValue=""
              value={response}
              disabled
              id="outlined-multiline-static"
              multiline
              minRows={8}
              maxRows={17}
              sx={{
                overflow: 'auto',
                width: '100%',
                '& .MuiInputBase-input.Mui-disabled': {
                  WebkitTextFillColor: '#000000'
                }
              }}
            />
          </Grid>
          <Grid display="flex" justifyContent="space-around" item xs={9}>
            <CopyToClipboard
              onCopy={() =>
                dispatch(
                  openSnackbar({
                    open: true,
                    message: 'Copied to Clipboard',
                    variant: 'alert',
                    alert: {
                      color: 'success'
                    },
                    close: false,
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    transition: 'SlideLeft'
                  })
                )
              }
            >
              <IconButton
                onClick={() => navigator.clipboard.writeText(response)}
                color="inherit"
                size="large"
                sx={{ mr: 1.5 }}
              >
                <Tooltip title="Copy to Clipboard">
                  <ContentPasteIcon />
                </Tooltip>
              </IconButton>
            </CopyToClipboard>
            {type === 'agent' && (
              <IconButton onClick={editPrompt} color="inherit" size="large">
                <Tooltip title="Edit Prompt">
                  <CreateIcon />
                </Tooltip>
              </IconButton>
            )}
            <IconButton onClick={saveFavorite} color="inherit" size="large">
              <Tooltip title="Set Favorite">
                <StarIcon />
              </Tooltip>
            </IconButton>
            <IconButton onClick={createDoc} color="inherit" size="large">
              <Tooltip title="Create a Docx File">
                <SaveAltIcon />
              </Tooltip>
            </IconButton>
            <IconButton color="inherit" size="large">
              <ChatIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResponseBox;
