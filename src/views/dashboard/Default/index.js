import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import useAuth from 'hooks/useAuth';
import Banner from './components/banner';
import Agents from './components/agents';
import Tasks from './components/tasks';
import BusinessGrowth from './components/businessGrowth';
import StatChart from './components/statChart';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        {user ?
          <Typography sx={{ marginBottom: '12px' }} variant="h2">
            Welcome, {user.firstname}
          </Typography> : <></>
        }
        <Grid container spacing={gridSpacing}>
          <Grid item lg={9} md={6} sm={6} xs={12}>
            {/* <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} /> */}
            <Banner />
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <BusinessGrowth />
              </Grid>
              {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalGrowthBarChart />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          AI Agents
        </Typography>
        <Grid container spacing={gridSpacing}>
          <Grid item sx={{ display: 'flex', flexDirection: 'column' }} xs={12} md={8} lg={9}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
            <Agents />
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Most Used Tasks
            </Typography>
            <Tasks />
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <StatChart />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
