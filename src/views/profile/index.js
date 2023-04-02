import { Grid, Typography, Button, Avatar, CardContent, LinearProgress, Card } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Avatar1 from 'assets/images/users/user-1.png';
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import Members from './components/members';
import { useTheme, styled } from '@mui/material/styles';
import Business from './components/business';
import Notifications from './components/notifications';

const Profile = () => {
  const theme = useTheme();

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

  return (
    <Grid container spacing={2}>
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
                <Button sx={{ width: '150px' }} variant="contained" size="small">
                  Import
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
                <Typography variant="h3" sx={{ marginBottom: '5px', overflow: 'auto' }}>
                  www.mentaluz.com/affiliate/123456789
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <AnimateButton>
                  <Button sx={{ width: '150px', marginBottom: '5px' }} variant="contained" size="small">
                    Copy
                  </Button>
                </AnimateButton>
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
