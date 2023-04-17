import { useState } from 'react';
import { CardMedia, Grid, Typography, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Agent = (props) => {
  const { agent, height, icon, style } = props;
  const [holo, setHolo] = useState(true);
  const toggleStar = () => {
    setHolo(!holo);
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <IconButton onClick={toggleStar} sx={{ left: style.left, position: 'absolute', color: 'white' }} size="large" disableRipple>
          {holo ? <StarOutlineIcon /> : <StarIcon />}
        </IconButton>
        <CardMedia component="img" sx={{ minHeight: height }} image={agent.image} />
      </div>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Typography sx={{ paddingX: '20px', paddingY: '13px' }} variant="h3">{agent.name}</Typography>
          <Typography sx={{ paddingX: '20px', marginTop: '-13px', marginBottom: '5px' }} variant="subtitle1">
            AI Agent
          </Typography>
        </Grid>
        {icon ? (
          <Grid alignSelf='center' textAlign='center' item xs={2}>
            <IconButton color="inherit" size="large">
              <Link style={{ textDecoration: 'none' }} to='/agent/chat' state={{ agent }}>
                <ChatIcon />
              </Link>
            </IconButton>
          </Grid>
        ) : <></>}
      </Grid>
    </>
  );
};

export default Agent;
