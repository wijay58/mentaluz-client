import React, { useState } from 'react';
import { Grid, Typography, CardContent, Input, InputAdornment, TextField, InputLabel, FormControl, Button, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { updateUserProfile } from 'store/slices/user';
import { useDispatch, useSelector } from 'store';

const Business = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [businessFocused, setBusinessFocused] = useState(false);
  const [businessText, setBusinessText] = useState(userData.businessDescription);

  const updateBusinessText = async () => {
    dispatch(updateUserProfile({ businessDescription: businessText }));
  };

  const handleKeyDown = (event, value) => {
    if (event.key === 'Enter') {
      setBusinessFocused(false);
      setBusinessText(value);
      updateBusinessText();
    }
  };
  return (
    <>
      <MainCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }} content={false}>
        <CardContent>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                Describe Your Business
              </Typography>
            </Grid>
            <Grid sx={{ wordWrap: 'break-word', overflow: 'auto' }} item xs={9}>
              {businessFocused ? (
                <TextField
                  defaultValue={businessText}
                  id="outlined-multiline-static"
                  multiline
                  onChange={(event) => setBusinessText(event.target.value)}
                  onKeyDown={(event) => { handleKeyDown(event, event.target.value); }}
                  onBlur={async () => {
                    setBusinessFocused(false);
                    updateBusinessText();
                  }}
                  rows={8}
                  sx={{ width: '100%' }}
                />
              ) : (
                <Typography
                  variant="subtitle1"
                  onClick={() => setBusinessFocused(true)}
                  sx={{ marginBottom: '10px', textAlign: 'center' }}
                >
                  {businessText}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </MainCard>
      <SubCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '1rem' }} contentSX={{ textAlign: 'left' }}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <InputBase
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment sx={{ alignSelf: 'end' }} position="end">
                <AnimateButton>
                  <Button sx={{ width: '150px', marginBottom: '5px' }} variant="contained" size="small">
                    Change
                  </Button>
                </AnimateButton>
              </InputAdornment>
            }
            label="Phone"
          />
        </FormControl>
      </SubCard>
      <SubCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '1rem' }} contentSX={{ textAlign: 'left' }}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <InputBase
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment sx={{ alignSelf: 'end' }} position="end">
                <AnimateButton>
                  <Button sx={{ width: '150px', marginBottom: '5px' }} variant="contained" size="small">
                    Change
                  </Button>
                </AnimateButton>
              </InputAdornment>
            }
            label="Phone"
          />
        </FormControl>
      </SubCard>
      <SubCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '1rem' }} contentSX={{ textAlign: 'left' }}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <InputBase
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment sx={{ alignSelf: 'end' }} position="end">
                <AnimateButton>
                  <Button sx={{ width: '150px', marginBottom: '5px' }} variant="contained" size="small">
                    Change
                  </Button>
                </AnimateButton>
              </InputAdornment>
            }
            label="Phone"
          />
        </FormControl>
      </SubCard>
      <SubCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '1rem' }} contentSX={{ textAlign: 'left' }}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <InputBase
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment sx={{ alignSelf: 'end' }} position="end">
                <AnimateButton>
                  <Button sx={{ width: '150px', marginBottom: '5px' }} variant="contained" size="small">
                    Change
                  </Button>
                </AnimateButton>
              </InputAdornment>
            }
            label="Phone"
          />
        </FormControl>
      </SubCard>
    </>
  );
};

export default Business;
