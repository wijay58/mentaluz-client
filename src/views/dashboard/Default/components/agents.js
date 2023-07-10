import { memo, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Card1 from 'assets/images/cards/card-1.png';
import Card2 from 'assets/images/cards/card-2.png';
import Card3 from 'assets/images/cards/card-3.png';
import Card4 from 'assets/images/cards/card-4.png';
import Card5 from 'assets/images/cards/card-5.png';
import Card6 from 'assets/images/cards/card-6.png';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ReactCardFlip from 'react-card-flip';
import Agent from './agent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'store';
import { getAIAgents } from 'store/slices/agents';
import Slider from 'react-slick';

const CardAgent = styled((props) => {
    const { agent, index, handleClick, isFlipped, className } = props;

    const theme = useTheme();

    return (
        <div className={className}>
            <div className="card">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{ height: '100%' }}>
                    <Card sx={{ boxShadow: theme.customShadows.primary, height: '100%' }} onClick={handleClick(index)}>
                        <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
                    </Card>
                    <Card sx={{ boxShadow: theme.customShadows.primary, height: '100%' }} onClick={handleClick(index)}>
                        <CardContent sx={{ minHeight: '22rem', maxHeight: '22rem', overflow: 'auto' }} className="card__container">
                            <Grid container spacing={1} className="card__container">
                                <Grid xs={12} item>
                                    <Typography variant="h3" color="secondary.dark" sx={{ marginBottom: '8px', textAlign: 'center' }}>
                                        {agent.name}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Button
                                variant="contained"
                                component={Link}
                                to="/agent/aiProfile"
                                className="card__link"
                                state={{ agent }}
                                sx={{
                                    boxShadow: theme.customShadows.primary,
                                    ':hover': {
                                        boxShadow: 'none'
                                    },
                                    color: 'white'
                                }}
                            >
                                Ask
                            </Button>
                        </CardContent>
                    </Card>
                </ReactCardFlip>
            </div>
        </div>
    );
})`
    cursor: pointer;
    height: 100%;

    .card {
        height: 100%;

        &__container {
            height: 100%;
            max-height: unset;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
        }

        &__link {
            width: fit-content;
            min-width: 80px;
        }
    }
`;

const Item = (props) => {
    const { item, agent } = props;

    const theme = useTheme();
    const { userData } = useSelector((state) => state.user);
    const [flipped, setFlipped] = useState(new Set());

    const handleClick = (id) => (e) => {
        e.preventDefault();

        const flip = new Set();

        flip.add(id);

        setFlipped((prevState) => {
            if (prevState.has(id)) return new Set();

            flip.add(id);

            return new Set(flip);
        });
    };

    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={2}>
        //         {agents.map((agent, i) => (
        //             <Grid item xs={12} md={6} lg={4} key={i}>
        //                 {agent.premium && !userData.premium ? (
        //                     <Card sx={{ boxShadow: theme.customShadows.primary, opacity: 0.5, height: '100%' }}>
        //                         <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
        //                     </Card>
        //                 ) : (
        //                     <CardAgent agent={agent} index={i} handleClick={handleClick} isFlipped={flipped.has(i)} />
        //                 )}
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Box>

        <Grid item xs={12} md={6} lg={4}>
            {agent.premium && !userData.premium ? (
                <Card sx={{ boxShadow: theme.customShadows.primary, opacity: 0.5, height: '100%' }}>
                    <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
                </Card>
            ) : (
                <CardAgent agent={agent} handleClick={handleClick} />
            )}
        </Grid>
    );
};

const Agents = () => {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [testItems, setTestItems] = useState([]);

    const getAgents = async () => {
        const list = await dispatch(getAIAgents());
        const tempList = JSON.parse(JSON.stringify(list));
        tempList[0].image = Card1;
        tempList[1].image = Card2;
        tempList[2].image = Card3;
        tempList[3].image = Card4;
        tempList[4].image = Card5;
        tempList[5].image = Card6;
        const first = tempList.slice(0, 3);
        const second = tempList.slice(3, 6);
        const sets = [
            {
                id: crypto.randomUUID(),
                set: 1,
                agents: first
            },
            {
                id: crypto.randomUUID(),
                set: 2,
                agents: second
            }
        ];
        setItems(sets);
        setTestItems(tempList);
    };

    useEffect(() => {
        getAgents();
    }, []);

    const settings = {
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        // <Carousel navButtonsAlwaysInvisible={false} autoPlay>
        //     {items.map((item) => {
        //         return <Item key={item.id} item={item} />;
        //     })}
        //
        //
        // </Carousel>

        <Slider {...settings}>
            {testItems.map((item) => {
                console.log('=>(agents.js) item\n', item);

                return <Item key={item._id} agent={item} />;
            })}
        </Slider>
    );
};

export default Agents;
