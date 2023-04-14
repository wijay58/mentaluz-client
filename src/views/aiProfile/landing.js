import { useState } from 'react';
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Card2 from 'assets/images/cards/card-2.jpg';
import { useTheme } from '@mui/material/styles';
import ReactCardFlip from 'react-card-flip';
import Agent from 'views/dashboard/Default/components/agent';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const [flipped, setFlipped] = useState(new Set());
  const theme = useTheme();

  const agents = [
    {
      name: 'Agent1',
      image: Card2
    },
    {
      name: 'Agent2',
      image: Card2
    },
    {
      name: 'Agent3',
      image: Card2
    },
    {
      name: 'Agent4',
      image: Card2
    },
    {
      name: 'Agent1',
      image: Card2
    },
    {
      name: 'Agent2',
      image: Card2
    },
    {
      name: 'Agent3',
      image: Card2
    },
    {
      name: 'Agent4',
      image: Card2
    },
  ];

  const handleEvent = function (id) {
    return (e) => {
      e.preventDefault();
      const flip = new Set(flipped);
      if (flip.has(id)) {
        flip.delete(id);
      } else {
        flip.add(id);
      }
      setFlipped(flip);
    };
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Agents
        </Typography>
        <Grid container spacing={2}>
          {agents.map((agent, i) => (
            <Grid item xs={12} md={6} lg={3} sx={{ cursor: "pointer" }}>
              <Link style={{ textDecoration: 'none' }} to='/agent/aiProfile' state={{ agent: agent.name }}>
                <ReactCardFlip isFlipped={flipped.has(i)} flipDirection="horizontal">
                  <Card sx={{ boxShadow: theme.customShadows.primary }} onMouseOver={handleEvent(i)}>
                    <Agent agent={agent} height='20rem' style={{ left: '21rem' }} />
                  </Card>
                  <Card sx={{ boxShadow: theme.customShadows.primary }} onMouseLeave={handleEvent(i)}>
                    <CardContent sx={{ minHeight: '23.5rem', maxHeight: '23.5rem', overflow: 'auto' }}>
                      <Grid container spacing={1}>
                        <Grid xs={12} item>
                          <Typography variant="h3" color='secondary.dark' sx={{ marginBottom: '8px', textAlign: 'center' }}>{agent.name}</Typography>
                          <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </ReactCardFlip>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AIAgents;
