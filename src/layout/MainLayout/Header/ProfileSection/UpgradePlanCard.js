// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import apiClient from 'api-service';
import { useSelector } from 'store';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// styles
const CardStyle = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? theme.palette.dark[800] : theme.palette.warning.light,
  marginTop: '16px',
  marginBottom: '16px',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '19px solid ',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.warning.main : theme.palette.warning.main,
    borderRadius: '50%',
    top: '65px',
    right: '-150px'
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '200px',
    height: '200px',
    border: '3px solid ',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.warning.main : theme.palette.warning.main,
    borderRadius: '50%',
    top: '145px',
    right: '-70px'
  }
}));

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => {
  const theme = useTheme();
  const { userData } = useSelector((state) => state.user);

  const handlePayment = async () => {
    const response = await apiClient.get('/payments/checkout');
    window.location.href = response.data.url;
  };

  return (
    <CardStyle>
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            {userData.premium ? <Typography variant="h4">Premium User</Typography> : <Typography variant="h4">Upgrade your plan</Typography>}
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color={theme.palette.mode === 'dark' ? 'textSecondary' : 'grey.900'}
              sx={{ opacity: theme.palette.mode === 'dark' ? 1 : 0.6 }}
            >
              Enjoy your premium benefits <br />
              for the rest of the year.
            </Typography>
          </Grid>
          <Grid item>
            <Stack direction="row">
              {!userData.premium ? (
                <AnimateButton>
                  <Button onClick={handlePayment} variant="contained" color="warning" sx={{ boxShadow: 'none' }}>
                    Go Premium
                  </Button>
                </AnimateButton>
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </CardStyle>
  );
};

export default UpgradePlanCard;
