import { Grid, Typography, Card, CardContent, LinearProgress, TextField, Button } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import Agent from 'views/dashboard/Default/components/agent';
import Card2 from 'assets/images/cards/card-2.jpg';
import Card3 from 'assets/images/cards/card-3.jpg';
import { useTheme, styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import LargeDialog from './largeDialog';
import { useEffect, useState } from 'react';
import { useSelector } from 'store';

const AIProfile = () => {
  const [open, setOpen] = useState(false);
  // const [airesponse, setAiresponse] = useState("");
  const { response, responseLoading } = useSelector((state) => state.agents);
  const theme = useTheme();
  const { state } = useLocation();
  const agent = {
    name: state.agent.name,
    image: state.agent.image
  };
  const tasks = [1, 2, 3, 4, 5, 6];

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

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
      <Grid item sm={4} md={4} xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Profile
        </Typography>
        <Card sx={{ boxShadow: theme.customShadows.primary, marginBottom: '2rem' }}>
          <Agent agent={agent} height='28rem' icon style={{ left: '89%' }} />
        </Card>
        <Card sx={{ boxShadow: theme.customShadows.primary }}>
          <CardContent>
            <Typography variant="h4" sx={{ marginTop: '20px', marginBottom: '10px' }}>
              About Agent
            </Typography>
            <Typography variant="caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a libero mi. Suspendisse nec fermentum velit.
              Integer mattis nunc ut commodo dignissim. Praesent a nisl sed nisl aliquam malesuada sed at dui. Vestibulum
              vel sem rutrum lacus pharetra convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Integer accumsan magna at tellus lacinia, sed aliquet lorem aliquam. Proin turpis
              nibh, tristique quis turpis ac, interdum pretium est. Aenean ligula dui, aliquam ac tempor ac, pulvinar
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={8} md={8} xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Tasks
        </Typography>
        <Grid container spacing={6}>
          {tasks.map((task, i) => (
            <Grid key={i} item xs={6}>
              {/* <Card sx={{ boxShadow: theme.customShadows.primary }}> */}
              {/* <CardMedia component="img" sx={{ minHeight: '8rem', maxHeight: '8rem' }} image={Card2} /> */}
              <Button onClick={() => setOpen(true)} sx={{ borderRadius: theme.shape.borderRadius, boxShadow: theme.customShadows.primary, width: '100%', height: '6rem', fontSize: "23px" }} variant="contained" size="large">
                Youtube
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
            <Grid container justifyContent='center' spacing={2}>
              <Grid item xs={9}>
                <TextField
                  defaultValue=""
                  value={response}
                  disabled
                  id="outlined-multiline-static"
                  multiline
                  rows={8}
                  sx={{
                    overflow: 'auto',
                    width: '100%',
                    "& .MuiInputBase-input.Mui-disabled": {
                      WebkitTextFillColor: "#000000",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid>
          {responseLoading ? <BorderLinearProgress color="secondary" /> : <></>}
        </Grid>
      </Grid>
      <LargeDialog open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default AIProfile;
