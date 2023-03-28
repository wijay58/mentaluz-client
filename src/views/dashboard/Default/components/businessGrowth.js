import MainCard from 'ui-component/cards/MainCard';
import { CardContent, Typography, Grid, Button } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useTheme } from '@mui/material/styles';

const BusinessGrowth = () => {
  const theme = useTheme();

  return (
    <MainCard sx={{ boxShadow: theme.customShadows.primary }} content={false}>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Business Growth Plan
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Introducing Mentaluz the AI powered business growth tool.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              Marketing Assesment
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ width: '100%', justifyContent: 'end' }}>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography sx={{ color: 'white' }} variant='h4'>Go</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <DoubleArrowIcon />
              </Grid>
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ marginTop: '30px' }}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ marginBottom: '10px' }}>
              Personal Growth Plan
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ marginBottom: '20px' }}>
              Introducing Mentaluz the AI powered business growth tool.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ marginBottom: '10px' }}>
              Marketing Assesment
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ width: '100%', justifyContent: 'end' }}>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography sx={{ color: 'white' }} variant='h4'>Done</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end' }}>
                <DoneAllIcon />
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </MainCard>
  );
};

export default BusinessGrowth;
