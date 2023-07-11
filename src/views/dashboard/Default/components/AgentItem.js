import { styled, useTheme } from '@mui/material/styles';
import { useSelector } from '../../../../store';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import Agent from './agent';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

export const AgentItem = styled((props) => {
    const { agent, className, handleClick, isFlipped } = props;

    const theme = useTheme();
    const { userData } = useSelector((state) => state.user);

    return (
        <div className={className}>
            <div className="item">
                {agent.premium && !userData.premium ? (
                    <Card sx={{ boxShadow: theme.customShadows.primary, opacity: 0.5, height: '100%' }}>
                        <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
                    </Card>
                ) : (
                    <div>
                        <div className="card">
                            <Card
                                sx={{ boxShadow: theme.customShadows.primary, height: '100%', minHeight: '420px' }}
                                className="card__placeholder"
                            >
                                <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
                            </Card>
                            <ReactCardFlip
                                isFlipped={isFlipped}
                                flipDirection="horizontal"
                                containerStyle={{
                                    height: '100%',
                                    minHeight: '420px',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: '20px'
                                }}
                            >
                                <Card
                                    sx={{ boxShadow: theme.customShadows.primary, height: '100%', minHeight: '420px' }}
                                    onClick={handleClick}
                                >
                                    <Agent agent={agent} height="20rem" style={{ left: '86%' }} />
                                </Card>
                                <Card
                                    sx={{ boxShadow: theme.customShadows.primary, height: '100%', minHeight: '420px' }}
                                    onClick={handleClick}
                                >
                                    <CardContent
                                        sx={{ minHeight: '22rem', maxHeight: '22rem', overflow: 'auto' }}
                                        className="card__container"
                                    >
                                        <Grid container spacing={1}>
                                            <Grid xs={12} item>
                                                <Typography
                                                    variant="h3"
                                                    color="secondary.dark"
                                                    sx={{ marginBottom: '8px', textAlign: 'center' }}
                                                >
                                                    {agent.name}
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                                    dolor in reprehenderit in voluptate
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
                                            Profile
                                        </Button>
                                    </CardContent>
                                </Card>
                            </ReactCardFlip>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
})`
    .item {
        margin-right: 15px;
    }

    .card {
        height: 100%;
        cursor: pointer;
        position: relative;

        &__placeholder {
            visibility: hidden;
            pointer-events: none;
            opacity: 0;
        }

        &__container {
            position: absolute;
            height: 100%;
            max-height: unset;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
        }

        &__link {
            width: fit-content;
            min-width: 120px;
        }
    }
`;
