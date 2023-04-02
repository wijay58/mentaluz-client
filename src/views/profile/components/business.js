import React from 'react';
import { Grid, Typography, CardContent, Input, InputAdornment, IconButton, InputLabel, FormControl, Button } from '@mui/material';
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
        <CardContent sx={{ padding: '20px' }}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                Describe Your Business
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1" sx={{ marginBottom: '10px', textAlign: 'center' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque turpis justo, varius
                sit amet velit vitae, gravida dapibus augue. Sed rhoncus interdum lacus ut mollis. Proin
                vehicula quam lobortis, tincidunt purus quis, laoreet orci. Curabitur sed augue vitae magna
                suscipit mollis. Vestibulum laoreet sit amet elit ac interdum. Ut tristique scelerisque odio
                id rhoncus. Integer imperdiet nunc non neque accumsan, sit amet varius felis volutpat. Sed
                eu nisl dolor. Suspendisse tempus ligula sed ante semper sodales. In aliquam ex ac justo
                venenatis, id tristique augue pretium. Cras eu libero lacinia eros tristique.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </MainCard>
      <SubCard sx={{ boxShadow: theme.customShadows.primary, marginBottom: '1rem' }} contentSX={{ textAlign: 'left' }}>
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <Input
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment position="end">
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
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <Input
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment position="end">
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
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <Input
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment position="end">
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
        <FormControl sx={{ width: '100%' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Phone">Phone</InputLabel>
          <Input
            sx={{ width: '100%' }}
            id="standard-adornment-Phone"
            endAdornment={
              <InputAdornment position="end">
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
