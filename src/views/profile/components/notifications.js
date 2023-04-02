import React from 'react';
import { Grid, Typography, CardContent, Card, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Notifications = () => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h2" sx={{ marginBottom: '10px' }}>
        Notifications
      </Typography>
      <Card sx={{ boxShadow: theme.customShadows.primary, marginY: '10px' }}>
        <CardContent>
          <Grid container flexDirection='row' spacing={2}>
            <Grid alignSelf='center' sx={{ textAlign: 'right' }} item xs={1}>
              <CircleNotificationsIcon />
            </Grid>
            <Grid item xs={7}>
              <Grid item>
                <Typography variant="h4" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                  Lorem Ipsum
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                  Lorum Ipsum is simply dummy text
                </Typography>
              </Grid>
            </Grid>
            <Grid alignSelf='start' sx={{ textAlign: 'right' }} item xs={4}>
              <Typography variant="caption" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                1 hour ago
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container flexDirection='row' spacing={2}>
            <Grid alignSelf='center' sx={{ textAlign: 'right' }} item xs={1}>
              <CircleNotificationsIcon />
            </Grid>
            <Grid item xs={7}>
              <Grid item>
                <Typography variant="h4" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                  Lorem Ipsum
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                  Lorum Ipsum is simply dummy text
                </Typography>
              </Grid>
            </Grid>
            <Grid alignSelf='start' sx={{ textAlign: 'right' }} item xs={4}>
              <Typography variant="caption" sx={{ marginTop: '5px', marginBottom: '5px' }}>
                1 hour ago
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Notifications;
