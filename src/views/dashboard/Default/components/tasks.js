import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardMedia, CardContent, Grid, Typography, Box, Button, IconButton } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Tasks = () => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const defaultHeight = { transition: 'height 0.2s ease-out', height: '100px' };
  const expandedHeight = { height: '300px', transition: 'height 0.5s ease-out' };

  const defaultTaskList = [1, 2, 3, 4, 5, 6];
  const expandedTaskList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <Card sx={{ boxShadow: theme.customShadows.primary, marginTop: '12px', textAlign: 'center' }} style={isCollapsed ? defaultHeight : expandedHeight}>
        {isCollapsed ? (
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {defaultTaskList.map((element) => {
                  return (
                    <Grid xs={12} key={element} md={2} lg={2} item>
                      <IconButton color="inherit" size='large'>
                        <AssignmentIcon sx={{ fontSize: "35px" }} />
                      </IconButton>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </CardContent>
        ) : (
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {expandedTaskList.map((element) => {
                  return (
                    <Grid xs={12} md={2} lg={2} key={element} item>
                      <IconButton color="inherit" size='large'>
                        <AssignmentIcon sx={{ fontSize: "35px" }} />
                      </IconButton>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </CardContent>
        )}
      </Card>
      <Grid sx={{ textAlign: 'center' }}>
        <Button onClick={() => setIsCollapsed((prev) => !prev)} color='secondary' variant="contained" sx={{ minWidth: '95px', color: 'white' }}>
          {isCollapsed ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </Button>
      </Grid>
    </>
  );
};

export default Tasks;
