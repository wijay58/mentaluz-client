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
      </Grid>
      <Grid item lg={9} md={10} xs={12}>
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
          <Agents />
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
        <Grid item xs={12}>
          <StatChart />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
