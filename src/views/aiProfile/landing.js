import { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, MobileStepper, Button } from '@mui/material';
import Card2 from 'assets/images/cards/card-2.jpg';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import ReactCardFlip from 'react-card-flip';
import Agent from 'views/dashboard/Default/components/agent';
import { Link } from 'react-router-dom';

const AIAgents = () => {
  const [currentCategories, setCurrentCategories] = useState([1, 2, 3, 4]);
  const [flipped, setFlipped] = useState(new Set());
  const [topic, setTopic] = useState("Marketing1");
  const theme = useTheme();
  const categories = [1, 2, 3, 4, 5, 6, 7, 8];

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

  const handleNext = () => {
    const lastEl = currentCategories[currentCategories.length - 1];
    if (categories[categories.length - 1] !== lastEl) {
      const newCats = currentCategories;
      newCats.shift();
      newCats.push(lastEl + 1);
      setCurrentCategories([...newCats]);
    }
  };

  const handlePrevious = () => {
    const firstEl = currentCategories[0];
    if (categories[0] !== firstEl) {
      const newCats = currentCategories;
      newCats.pop();
      newCats.unshift(firstEl - 1);
      setCurrentCategories([...newCats]);
    }
  };

  const setCurrentTopic = (e) => {
    setTopic(e.target.nextElementSibling.innerText);
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Select Category
        </Typography>
        <Card sx={{ boxShadow: theme.customShadows.primary }}>
          <CardContent>
            <Grid container spacing={7}>
              {currentCategories.map((category) => (
                <Grid sx={{ cursor: 'pointer' }} onClick={setCurrentTopic} key={category} item lg={3} md={4} xs={6}>
                  <CardMedia component="img" sx={{ borderRadius: '20px', minHeight: '8rem', maxHeight: '8rem' }} image={Card2} />
                  <Typography variant='subtitle1' style={{ textAlign: 'center' }}>Marketing {category}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={1}
          sx={{ float: 'right', maxWidth: 400, flexGrow: 1, backgroundColor: 'transparent' }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={1 === 5}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handlePrevious} disabled={1 === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          {topic}
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
