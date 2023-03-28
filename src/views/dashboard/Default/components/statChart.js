import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import useConfig from 'hooks/useConfig';

const StatChart = () => {
  const theme = useTheme();
  const { navType } = useConfig();

  const { primary } = theme.palette.text;
  const darkLight = theme.palette.dark.light;
  const grey200 = theme.palette.grey[200];
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  const newChartData = {
    height: 480,
    type: 'bar',
    options: {
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      yaxis: {
        labels: {
          style: {
            colors: [primary]
          }
        }
      },
      tooltip: {
        theme: navType === 'dark' ? 'dark' : 'light'
      },
      chart: {
        id: 'bar-chart',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%'
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
          }
        },
        type: 'category',
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      legend: {
        show: true,
        fontFamily: `'Roboto', sans-serif`,
        position: 'bottom',
        offsetX: 20,
        labels: {
          colors: grey500,
          useSeriesColors: false
        },
        markers: {
          width: 16,
          height: 16,
          radius: 5
        },
        itemMargin: {
          horizontal: 15,
          vertical: 8
        }
      },
      fill: {
        type: 'solid'
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: navType === 'dark' ? darkLight + 20 : grey200,
        show: true
      }
    },
    series: [
      {
        name: '',
        data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75]
      },
      {
        name: '',
        data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75]
      },
      {
        name: '',
        data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10]
      },
      {
        name: '',
        data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0]
      }
    ]
  };
  return (
    <MainCard>
      <Grid item xs={12} sx={{ '& .apexcharts-legend-text': { marginLeft: '8px' } }}>
        <Chart {...newChartData} />
      </Grid>
    </MainCard>
  );
};

export default StatChart;
