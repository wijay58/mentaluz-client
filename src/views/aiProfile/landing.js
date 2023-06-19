import { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, MobileStepper, Button } from '@mui/material';
import Card1 from 'assets/images/cards/card-1.png';
import Card2 from 'assets/images/cards/card-2.png';
import Card3 from 'assets/images/cards/card-3.png';
import Card4 from 'assets/images/cards/card-4.png';
import Card5 from 'assets/images/cards/card-5.png';
import Card6 from 'assets/images/cards/card-6.png';
import Card7 from 'assets/images/cards/card-7.png';
import Card8 from 'assets/images/cards/card-8.png';
import { useTheme } from '@mui/material/styles';
import ReactCardFlip from 'react-card-flip';
import Agent from 'views/dashboard/Default/components/agent';
import { Link } from 'react-router-dom';
import { getAIAgents } from 'store/slices/agents';
import { useSelector, useDispatch } from 'store';

const AIAgents = () => {
  const [flipped, setFlipped] = useState(new Set());
  const [agents, setAgents] = useState([]);
  const [images] = useState([Card1, Card2, Card3, Card4, Card5, Card6]);
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const getAgents = async () => {
    const list = await dispatch(getAIAgents());
    const tempList = JSON.parse(JSON.stringify(list));
    tempList[0].image = Card1;
    tempList[1].image = Card2;
    tempList[2].image = Card3;
    tempList[3].image = Card4;
    tempList[4].image = Card5;
    tempList[5].image = Card6;
    setAgents(tempList);
  };

  useEffect(() => {
    getAgents();
  }, []);

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
            <Grid item xs={12} md={6} lg={4} sx={{ cursor: "pointer" }}>
              {agent.premium && !userData.premium ? (
                <Card sx={{ boxShadow: theme.customShadows.primary, opacity: 0.5 }}>
                  <Agent agent={agent} height='20rem' style={{ left: '86%' }} />
                </Card>
              ) : (
                <Link style={{ textDecoration: 'none' }} to='/agent/aiProfile' state={{ agent }}>
                  <ReactCardFlip isFlipped={flipped.has(i)} flipDirection="horizontal">
                    <Card sx={{ boxShadow: theme.customShadows.primary }} onMouseOver={handleEvent(i)}>
                      <Agent agent={agent} height='20rem' style={{ left: '86%' }} />
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
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AIAgents;
