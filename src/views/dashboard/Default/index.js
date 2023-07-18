import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import Banner from './components/banner';
import Agents from './components/agents';
import Tasks from './components/tasks';
import BusinessGrowth from './components/businessGrowth';
import StatChart from './components/statChart';
import { css, styled } from '@mui/material/styles';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = styled((props) => {
    const { className } = props;

    const { user } = useAuth();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className={className}>
            <div className="dashboard">
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        {user ? (
                            <Typography sx={{ marginBottom: '12px' }} variant="h2">
                                Welcome, {user.firstname}
                            </Typography>
                        ) : (
                            <></>
                        )}
                    </Grid>
                    <Grid item lg={9} md={10} xs={12} className="dashboard__container">
                        <Grid item xs={12}>
                            {/* <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} /> */}
                            <Banner />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
                                AI Agents
                            </Typography>
                        </Grid>
                        <Grid item sx={{ display: 'flex', flexDirection: 'column' }} lg={12}>
                            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
                            <div className="dashboard__agents">
                                <Agents />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
                                Most Used Tasks
                            </Typography>
                            <Tasks />
                        </Grid>
                    </Grid>

                    <Grid item lg={3} md={6} xs={12}>
                        <Grid item xs={12} sx={{ marginBottom: '2rem' }}>
                            <BusinessGrowth />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
})`
    .dashboard {
        &__container {
            ${({ theme }) => ({
                [theme.breakpoints.down('lg')]: css`
                    max-width: 100%;
                `
            })};
        }

        &__agents {
            margin-bottom: 30px;
        }
    }
`;

export default Dashboard;
