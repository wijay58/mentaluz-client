import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Grid, Typography, Box, Button, IconButton } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';

const Tasks = () => {
  let taskList = [];
  const theme = useTheme();
  const matches = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [isCollapsed, setIsCollapsed] = useState(true);

  const defaultTaskList = [1, 2, 3, 4, 5, 6];
  const expandedTaskList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const renderTaskList = () => {
    if (isCollapsed) {
      taskList = defaultTaskList;
    } else {
      taskList = expandedTaskList;
    }

    return (
      <Card sx={{ boxShadow: theme.customShadows.primary, marginTop: '12px', textAlign: 'center' }}>
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              {taskList.map((element) => {
                return (
                  <Grid xs={4} key={element} md={2} lg={2} item>
                    <IconButton color="inherit" size='large'>
                      <AssignmentIcon sx={{ fontSize: "35px" }} />
                    </IconButton>
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
        <Button onClick={() => setIsCollapsed((prev) => !prev)} color='secondary' variant="contained" sx={{ minWidth: '95px', color: 'white' }}>
          {isCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Button>
      </Grid>
    </>
  );
};

export default Tasks;
