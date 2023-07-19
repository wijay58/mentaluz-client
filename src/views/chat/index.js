import React, { useEffect, useRef, useState } from 'react';
import { Backdrop, Card, CardContent, Divider, Grid, IconButton, LinearProgress, TextField, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import MainCard from 'ui-component/cards/MainCard';
import Agent from 'views/dashboard/Default/components/agent';
import { styled, useTheme } from '@mui/material/styles';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChartHistory from '../application/chat/ChartHistory';
import { useDispatch, useSelector } from 'store';
import { useLocation } from 'react-router-dom';
import { getUserChats } from 'store/slices/chat';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';
import Card8 from 'assets/images/cards/card-8.png';
import { chat } from 'store/slices/agents';

const Chat = () => {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.user);
    const { chats } = useSelector((state) => state.chat);

    const [loading, setLoaing] = useState(false);
    const [data, setData] = useState([]);
    const [personality, setPersonality] = useState(false);
    const [message, setMessage] = useState('');
    const [agent, setAgent] = useState({
        name: 'Default Agent',
        image: Card8
    });

    useEffect(() => {
        dispatch(getUserChats([]));
    }, []);

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 15,
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5
        }
    }));

    const user = {
        name: agent.name,
        avatar: 'user-1.png',
        online_status: 'available'
    };

    const handleOnSend = async () => {
        const d = new Date();
        setMessage('');
        const newMessage = {
            /* eslint no-underscore-dangle: 0 */
            from: userData._id,
            to: 'Agent',
            text: message,
            time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setData((prevState) => [...prevState, newMessage]);
        // dispatch(insertChat(newMessage));
        // dispatch(getUserChats(conversation));
        const data = {
            conversation: chats,
            message
        };
        setLoaing(true);
        const response = await dispatch(chat(data));
        dispatch(getUserChats(response.conversation));
        setData((prevState) => [...prevState, response.newMessage]);
        setLoaing(false);
    };

    const givePersonality = async (agent) => {
        const data = {
            conversation: chats,
            message: `For the follwing session you are a ${agent.name} and answer my questions. When asked who you are reply with ${agent.name}
      and when asked what you do reply with ${agent.name}.Now just state what you do as ${agent.name}.`
        };
        setLoaing(true);
        const response = await dispatch(chat(data));
        dispatch(getUserChats(response.conversation));
        setData((prevState) => [...prevState, response.newMessage]);
        setLoaing(false);
        setPersonality(true);
    };

    const handleEnter = (event) => {
        if (event?.key !== 'Enter') {
            return;
        }
        handleOnSend();
    };

    const { state } = useLocation();

    useEffect(() => {
        if (state) {
            setAgent(state.agent);
            givePersonality(state.agent);
        } else {
            setPersonality(true);
        }
    }, []);

    const theme = useTheme();
    const scrollRef = useRef();
    return (
        <Grid container spacing={6}>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={!personality}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid item xs={12}>
                <Typography variant="h2" sx={{ marginBottom: '10px' }}>
                    Ai Specialist
                </Typography>
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                    <Grid item lg={3} md={6} xs={12}>
                        <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
                            <Agent agent={agent} height="20rem" icon style={{ left: '88%' }} />
                        </Card>
                        <Card sx={{ boxShadow: theme.customShadows.primary, display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <CardContent>
                                <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                                    About Agent
                                </Typography>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a libero mi. Suspendisse nec fermentum
                                    velit. Integer mattis nunc ut commodo dignissim. Praesent a nisl sed nisl aliquam malesuada sed at dui.
                                    Vestibulum vel sem rutrum lacus pharetra convallis. Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada fames ac turpis egestas. Integer accumsan magna at tellus lacinia, sed aliquet lorem
                                    aliquam. Proin turpis nibh, tristique quis turpis ac, interdum pretium est. Aenean ligula dui, aliquam
                                    ac tempor ac, pulvinar
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={9} md={6} xs={12}>
                        <MainCard
                            sx={{
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
                                boxShadow: theme.customShadows.primary,
                                height: '100%'
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
                                    style={{ width: '100%', height: 'calc(100vh - 20rem)', overflowX: 'hidden', minHeight: 640 }}
                                >
                                    <ChartHistory
                                        theme={theme}
                                        handleUserDetails={() => console.log('handleUserDetails')}
                                        handleDrawerOpen={() => console.log('handleUserDetails')}
                                        user={userData}
                                        data={data}
                                    />
                                    <span ref={scrollRef} />
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
                        <Grid>{loading ? <BorderLinearProgress color="secondary" /> : <></>}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Chat;
