import React from 'react';
import { Grid, Typography, CardContent, Input, InputAdornment, TextField, InputLabel, FormControl, Button, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'ui-component/extended/AnimateButton';

const Business = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: '10px' }}>
        Describe Your Business
      </Typography>
      <MainCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }} content={false}>
        <CardContent>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                Describe Your Business
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={8}
                sx={{ width: '100%' }}
              />
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
