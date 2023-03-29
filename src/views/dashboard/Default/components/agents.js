import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card1 from 'assets/images/cards/card-1.jpg';
import Card3 from 'assets/images/cards/card-3.jpg';
import Card2 from 'assets/images/cards/card-2.jpg';
import { Card, CardMedia, CardContent, Grid, Typography, Button, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ReactCardFlip from 'react-card-flip';

const Agents = () => {
  const theme = useTheme();

  const items = [
    {
      set: 1,
      agents: [
        {
          name: 'Agent1',
          image: Card1
        },
        {
          name: 'Agent2',
          image: Card2
        },
        {
          name: 'Agent3',
          image: Card3
        },
        {
          name: 'Agent4',
          image: Card1
        },
      ]
    },
    {
      set: 2,
      agents: [
        {
          name: 'Agent5',
          image: Card3
        },
        {
          name: 'Agent6',
          image: Card1
        },
        {
          name: 'Agent7',
          image: Card2
        },
        {
          name: 'Agent8',
          image: Card1
        },
      ]
    }
  ];

  function Item(props) {
    const [flipped, setFlipped] = useState(new Set());

    const handleClick = function (id) {
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

    const { item } = props;
    const { set, agents } = item;

    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid Grid container spacing={2}>
            {agents.map((agent, i) => (
              <Grid item xs={12} md={6} lg={3}>
                <ReactCardFlip isFlipped={flipped.has(i)} flipDirection="horizontal">
                  <Card sx={{ boxShadow: theme.customShadows.primary }} onMouseOver={handleClick(i)}>
                    <CardMedia component="img" sx={{ minHeight: '20rem' }} image={agent.image} />
                    <Grid container spacing={1}>
                      <Grid xs={12} sx={{ padding: '0 !important' }} item>
                        <Typography sx={{ paddingX: '20px', paddingY: '13px' }} variant="subtitle1">{agent.name}</Typography>
                        <Typography sx={{ paddingX: '20px', marginTop: '-13px', marginBottom: '5px' }} variant="subtitle2">
                          AI Agent
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                  <Card sx={{ boxShadow: theme.customShadows.primary }} onMouseLeave={handleClick(i)}>
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
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }

  return (
    <Carousel
      navButtonsAlwaysInvisible
      autoPlay={false}
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
};

export default Agents;
