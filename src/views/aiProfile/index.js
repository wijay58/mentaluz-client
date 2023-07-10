import { Backdrop, Button, Card, CardContent, Grid, IconButton, LinearProgress, TextField, Tooltip, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import Agent from 'views/dashboard/Default/components/agent';
import Card1 from 'assets/images/cards/card-1.png';
import { styled, useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import LargeDialog from './largeDialog';
import PromptDialog from './promptDialog';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'store';
import { getTaskGroupsBySpecialist, getTasks, saveFav, setEditPrompt, setUpdatePrompt, setUpdatePromptTask } from 'store/slices/agents';
import ChatIcon from '@mui/icons-material/Chat';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CreateIcon from '@mui/icons-material/Create';
import StarIcon from '@mui/icons-material/Star';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { openSnackbar } from 'store/slices/snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { saveAs } from 'file-saver';
import * as Docx from 'docx';

const { Packer, Document, Paragraph, TextRun } = Docx;

const AIProfile = () => {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [groups, setGroups] = useState([]);
    const [tasksLoading, setTasksLoading] = useState(false);
    // const [airesponse, setAiresponse] = useState("");
    const { response, responseLoading, updatePromptTask, task } = useSelector((state) => state.agents);
    const theme = useTheme();
    const { state } = useLocation();
    const dispatch = useDispatch();
    let agent;
    if (!state.agent) {
        agent = {
            name: 'Agent1',
            image: Card1,
            id: '648f0452d0ee1b071806e4b4'
        };
    } else {
        agent = {
            name: state.agent.name,
            image: state.agent.image,
            id: state.agent._id
        };
    }

    const getTaskGroups = async () => {
        const tasksgroups = await dispatch(getTaskGroupsBySpecialist(agent.id));
        setGroups(tasksgroups);
    };

    useEffect(() => {
        getTaskGroups();
        if (state.task) {
            dispatch(setUpdatePrompt(true));
            dispatch(setEditPrompt(true));
            dispatch(setUpdatePromptTask(state.task));
        }
    }, [state]);

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 15,
        borderRadius: 5,
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5
        }
    }));

    const loadTasks = async (e) => {
        setTasksLoading(true);
        const gotTasks = await dispatch(getTasks(e.target.textContent));
        setTasks(gotTasks);
        setOpen(true);
        setTasksLoading(false);
    };

    const editPrompt = () => {
        if (updatePromptTask) {
            dispatch(setUpdatePrompt(true));
            dispatch(setEditPrompt(true));
        }
    };

    const saveFavorite = async () => {
        if (task) {
            const data = {
                task,
                response
            };
            await dispatch(saveFav(data));
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Saved to Favorites',
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false,
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    transition: 'SlideLeft'
                })
            );
        }
    };

    const createDoc = () => {
        if (response) {
            const doc = new Document({
                sections: [
                    {
                        properties: {},
                        children: [
                            new Paragraph({
                                children: [new TextRun({ text: response })]
                            })
                        ]
                    }
                ]
            });
            Packer.toBlob(doc).then((blob) => {
                saveAs(blob, 'response.docx');
            });
        }
    };

    // let i = -1;
    // const speed = 20;

    // function typeWriter() {
    //   if (i < response.length) {
    //     document.getElementById("outlined-multiline-static").innerHTML += response.charAt(i);
    //     i += 1;
    //     setTimeout(typeWriter, speed);
    //   }
    // }

    // useEffect(() => {
    //   typeWriter();
    // }, [response]);

    return (
        <Grid container spacing={6}>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={tasksLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={groups.length === 0}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid item sm={4} md={4} xs={12}>
                <Typography variant="h2" sx={{ marginBottom: '10px' }}>
                    Profile
                </Typography>
                <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
                    <Agent agent={agent} height="28rem" icon style={{ left: '89%' }} />
                </Card>
                <Card sx={{ boxShadow: theme.customShadows.primary }}>
                    <CardContent>
                        <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
                            About Agent
                        </Typography>
                        <Typography variant="caption">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a libero mi. Suspendisse nec fermentum velit.
                            Integer mattis nunc ut commodo dignissim. Praesent a nisl sed nisl aliquam malesuada sed at dui. Vestibulum vel
                            sem rutrum lacus pharetra convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                            ac turpis egestas. Integer accumsan magna at tellus lacinia, sed aliquet lorem aliquam. Proin turpis nibh,
                            tristique quis turpis ac, interdum pretium est. Aenean ligula dui, aliquam ac tempor ac, pulvinar
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={8} md={8} xs={12}>
                <Typography variant="h2" sx={{ marginBottom: '10px' }}>
                    Tasks
                </Typography>
                <Grid container spacing={6}>
                    {groups.map((task, i) => (
                        <Grid key={i} item xs={6}>
                            {/* <Card sx={{ boxShadow: theme.customShadows.primary }}> */}
                            {/* <CardMedia component="img" sx={{ minHeight: '8rem', maxHeight: '8rem' }} image={Card2} /> */}
                            <Button
                                onClick={loadTasks}
                                sx={{
                                    borderRadius: theme.shape.borderRadius,
                                    boxShadow: theme.customShadows.primary,
                                    width: '100%',
                                    height: '6rem',
                                    fontSize: '23px'
                                }}
                                variant="contained"
                                size="large"
                            >
                                {task}
                            </Button>
                            {/* </Card> */}
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="h2" sx={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                    Response
                </Typography>
                <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
                    <CardContent>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item xs={9}>
                                <TextField
                                    defaultValue=""
                                    value={response}
                                    disabled
                                    id="outlined-multiline-static"
                                    multiline
                                    minRows={8}
                                    maxRows={17}
                                    sx={{
                                        overflow: 'auto',
                                        width: '100%',
                                        '& .MuiInputBase-input.Mui-disabled': {
                                            WebkitTextFillColor: '#000000'
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid display="flex" justifyContent="space-around" item xs={9}>
                                <CopyToClipboard
                                    onCopy={() =>
                                        dispatch(
                                            openSnackbar({
                                                open: true,
                                                message: 'Copied to Clipboard',
                                                variant: 'alert',
                                                alert: {
                                                    color: 'success'
                                                },
                                                close: false,
                                                anchorOrigin: { vertical: 'top', horizontal: 'right' },
                                                transition: 'SlideLeft'
                                            })
                                        )
                                    }
                                >
                                    <IconButton
                                        onClick={() => navigator.clipboard.writeText(response)}
                                        color="inherit"
                                        size="large"
                                        sx={{ mr: 1.5 }}
                                    >
                                        <Tooltip title="Copy to Clipboard">
                                            <ContentPasteIcon />
                                        </Tooltip>
                                    </IconButton>
                                </CopyToClipboard>
                                <IconButton onClick={editPrompt} color="inherit" size="large">
                                    <Tooltip title="Edit Prompt">
                                        <CreateIcon />
                                    </Tooltip>
                                </IconButton>
                                <IconButton onClick={saveFavorite} color="inherit" size="large">
                                    <Tooltip title="Set Favorite">
                                        <StarIcon />
                                    </Tooltip>
                                </IconButton>
                                <IconButton onClick={createDoc} color="inherit" size="large">
                                    <Tooltip title="Create a Docx File">
                                        <SaveAltIcon />
                                    </Tooltip>
                                </IconButton>
                                <IconButton color="inherit" size="large">
                                    <ChatIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                <Grid>{responseLoading ? <BorderLinearProgress color="secondary" /> : <></>}</Grid>
            </Grid>
            <LargeDialog open={open} tasks={tasks} setOpen={setOpen} />
            <PromptDialog setModalClose={setOpen} />
        </Grid>
    );
};

export default AIProfile;
