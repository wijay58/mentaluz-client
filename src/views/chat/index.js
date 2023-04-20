import React, { useRef, useState, useEffect } from 'react';
import { Grid, Typography, Avatar, Divider, CardContent, IconButton, TextField, Card } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import Agent from 'views/dashboard/Default/components/agent';
import { useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChartHistory from '../application/chat/ChartHistory';
import { useDispatch, useSelector } from 'store';
import { useLocation } from 'react-router-dom';
import { getUser, getUserChats, insertChat } from 'store/slices/chat';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import Card8 from 'assets/images/cards/card-8.png';

const Chat = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [agent, setAgent] = useState({
    name: 'Default Agent',
    image: Card8
  });

  const user = {
    name: agent.name,
    avatar: 'user-1.png',
    online_status: 'available',
  };

  const handleOnSend = () => {
    const d = new Date();
    setMessage('');
    const newMessage = {
      from: 'User1',
      to: user.name,
      text: message,
      time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setData((prevState) => [...prevState, newMessage]);
    dispatch(insertChat(newMessage));
  };

  const handleEnter = (event) => {
    if (event?.key !== 'Enter') {
      return;
    }
    handleOnSend();
  };

  useEffect(() => {
    setData(
      [
        {
          id: 1,
          from: 'User1',
          to: 'Alene',
          text: 'Hi Good Morning!',
          time: '11:23 AM'
        },
        {
          id: 2,
          from: 'Alene',
          to: 'User1',
          text: 'Hey. Very Good morning. How are you?',
          time: '11:23 AM'
        },
        {
          id: 3,
          from: 'User1',
          to: 'Alene',
          text: 'Good. Thank you',
          time: '11:23 AM'
        },
        {
          id: 4,
          from: 'Alene',
          to: 'User1',
          text: 'I need your minute, are you available?',
          time: '11:23 AM'
        }
      ]
    );
  }, []);
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setAgent(state.agent);
    }
  }, []);

  const theme = useTheme();
  const scrollRef = useRef();
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Ai Specialist
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6} xs={12}>
            <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
              <Agent agent={agent} height='28rem' icon style={{ left: '88%' }} />
            </Card>
          </Grid>
          <Grid item lg={9} md={6} xs={12}>
            <MainCard
              sx={{
                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
                boxShadow: theme.customShadows.primary
              }}
            >
              <Grid container spacing={0.5}>
                <Grid item xs={12}>
                  <Grid item>
                    <Grid container spacing={2} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                      <Grid item sm zeroMinWidth>
                        <Grid container spacing={0} alignItems="center">
                          <Grid item xs={12}>
                            <Typography variant="h4" component="div">
                              {user.name}{' '}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider sx={{ mt: theme.spacing(2) }} />
                </Grid>
                <PerfectScrollbar
                  style={{ width: '100%', height: 'calc(100vh - 440px)', overflowX: 'hidden', minHeight: 525 }}
                >
                  <CardContent>
                    <ChartHistory
                      theme={theme}
                      handleUserDetails={() => console.log('handleUserDetails')}
                      handleDrawerOpen={() => console.log('handleUserDetails')}
                      user={user}
                      data={data}
                    />
                    <span ref={scrollRef} />
                  </CardContent>
                </PerfectScrollbar>
                <Grid item xs={12}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs zeroMinWidth>
                      <TextField
                        fullWidth
                        label="Type a Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleEnter}
                      />
                    </Grid>
                    <Grid item>
                      <IconButton color="primary" onClick={handleOnSend} size="large">
                        <SendTwoToneIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
