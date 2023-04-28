import { useState } from 'react';
import { Grid, Card, LinearProgress, TextField, MenuItem, Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme, styled } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import ImageUpload from './components/imageUpload';

const Business = () => {
  const currencies = [
    {
      value: 'Washington',
      label: 'Washington'
    },
    {
      value: 'India',
      label: 'India'
    },
    {
      value: 'Africa',
      label: 'Africa'
    },
    {
      value: 'New-York',
      label: 'New York'
    },
    {
      value: 'Malaysia',
      label: 'Malaysia'
    }
  ];

  const experiences = [
    {
      value: 'Startup',
      label: 'Startup'
    },
    {
      value: '2-year',
      label: '2 year'
    },
    {
      value: '3-year',
      label: '3 year'
    },
    {
      value: '4-year',
      label: '4 year'
    },
    {
      value: '5-year',
      label: '5 year'
    }
  ];

  const theme = useTheme();
  const [progress, setProgress] = useState(false);
  const [currency, setCurrency] = useState('Washington');
  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  const [experience, setExperience] = useState('Startup');
  const handleChange2 = (event) => {
    setExperience(event.target.value);
  };

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));
  return (
    <Grid container spacing={5}>
      <Grid item lg={6} md={6} xs={12}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} contentSX={{ textAlign: 'center' }} title="Change Photo">
          <ImageUpload setProgress={setProgress} />
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                {progress ? <BorderLinearProgress color="secondary" /> : <></>}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} title="Personal Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic1" fullWidth label="Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  label="Location"
                  value={currency}
                  onChange={handleChange1}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static1"
                  label="Bio"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-select-experience"
                  select
                  fullWidth
                  label="Experience"
                  value={experience}
                  onChange={handleChange2}
                >
                  {experiences.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6}>
                <AnimateButton>
                  <Button sx={{ width: '150px', float: 'right', marginTop: '1rem' }} variant="contained" component="label" size="small">
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} title="Contact Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic2" fullWidth label="Contact Phone" defaultValue="(+99) 9999 999 999" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic3" fullWidth label="Email" defaultValue="demo@sample.com" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic4" fullWidth label="Portfolio Url" defaultValue="https://demo.com" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static2"
                  label="Address"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue="3379  Monroe Avenue, Fort Myers, Florida(33912)"
                />
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button sx={{ width: '150px', float: 'right' }} variant="contained" component="label" size="small">
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Business;
