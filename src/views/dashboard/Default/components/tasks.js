import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'store';
import { useNavigate } from 'react-router-dom';
import { getTasks } from 'store/slices/agents';
import { Box, Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Tasks = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [allTasks, setAllTasks] = useState([]);
    const tasks = useRef([]);

    const loadTasks = async (e) => {
        const gotTasks = await dispatch(getTasks());
        const first6Tasks = gotTasks.slice(0, 6);
        setAllTasks(gotTasks);
        tasks.current = first6Tasks;
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const navigateTo = (task) => {
        return () => {
            navigate('/agent/aiProfile', { state: { task } });
        };
    };

    const renderTaskList = () => {
        if (isCollapsed) {
            const first6Tasks = allTasks.slice(0, 6);
            tasks.current = first6Tasks;
        } else {
            const first18Tasks = allTasks.slice(0, 18);
            tasks.current = first18Tasks;
        }

        return (
            <Card sx={{ boxShadow: theme.customShadows.primary, marginTop: '12px', textAlign: 'center' }}>
                <CardContent>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            {tasks.current.map((element) => {
                                return (
                                    <Grid container direction="column" xs={4} key={element.createdAt} md={2} lg={2} item>
                                        <IconButton onClick={navigateTo(element)} color="inherit" size="large">
                                            <AssignmentIcon sx={{ fontSize: '35px' }} />
                                        </IconButton>
                                        <Typography variant="body1">{element.name}</Typography>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        );
    };

    return (
        <>
            {renderTaskList()}
            <Grid sx={{ textAlign: 'center' }}>
                <Button
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    color="secondary"
                    variant="contained"
                    sx={{ minWidth: '95px', color: 'white', marginTop: '20px' }}
                >
                    {isCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </Button>
            </Grid>
        </>
    );
};

export default Tasks;
