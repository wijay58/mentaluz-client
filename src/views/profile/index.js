import { useState } from 'react';
import { Grid, Typography, Button, Avatar, LinearProgress, Card, Tooltip } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Avatar1 from 'assets/images/users/user-1.png';
import SubCard from 'ui-component/cards/SubCard';
import Members from './components/members';
import { useTheme, styled } from '@mui/material/styles';
import Business from './components/business';
import Notifications from './components/notifications';

const Profile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    const text = document.getElementById('link').innerHTML;
    navigator.clipboard.writeText(text);
    handleTooltipOpen();
  };

  return (
    <Grid container spacing={5}>
      <Grid item sm={6} md={6} xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Profile
        </Typography>
        <SubCard sx={{ boxShadow: theme.customShadows.primary, padding: '10px' }} contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Avatar alt="User 1" src={Avatar1} sx={{ width: 150, height: 150, margin: '0 auto' }} />
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button sx={{ width: '150px' }} variant="contained" component="label" size="small">
                  Import
                  <input hidden accept="image/*" type="file" />
                </Button>
              </AnimateButton>
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button sx={{ width: '150px' }} variant="contained" size="small">
                  Change Photo
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary, marginY: '10px' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                <BorderLinearProgress variant="determinate" color="secondary" value={65} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Affiliate Link
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SubCard sx={{ boxShadow: theme.customShadows.primary }} contentSX={{ textAlign: 'left' }}>
            <Grid container alignItems='center' spacing={2}>
              <Grid item xs={12} md={6} lg={9}>
                <Typography variant="h3" id='link' sx={{ marginBottom: '5px', overflow: 'auto' }}>
                  www.mentaluz.com/affiliate/123456789
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Tooltip
                  placement="top"
                  open={open}
                  title="Copied to clipboard"
                >
                  <AnimateButton>
                    <Button sx={{ width: '150px', marginBottom: '5px' }} onClick={copyToClipboard} variant="contained" size="small">
                      Copy
                    </Button>
                  </AnimateButton>
                </Tooltip>
                <AnimateButton>
                  <Button sx={{ width: '150px' }} variant="contained" size="small">
                    Send
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Members
          </Typography>
          <Members />
        </Grid>
      </Grid>
      <Grid item sm={6} md={6} xs={12}>
        <Business />
        <Notifications />
      </Grid>
    </Grid>
  );
};

export default Profile;
