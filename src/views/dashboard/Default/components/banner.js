import { Card, CardMedia, CardContent, Grid, Typography, CardActions, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import banner1 from 'assets/images/banner/banner-1.png';
import banner2 from 'assets/images/banner/banner-2.png';
import banner3 from 'assets/images/banner/banner-3.png';
import Carousel from 'react-material-ui-carousel';

const Banner = () => {
  const theme = useTheme();

  const items = [
    {
      image: banner1,
      description: "Order Now"
    },
    {
      image: banner2,
      description: "Try Now"
    },
    {
      image: banner3,
      description: "Get In"
    }
  ];

  function Item(props) {
    const { item } = props;
    const { image, description } = item;
    return (
      <Card sx={{ boxShadow: theme.customShadows.primary }}>
        <CardMedia image={image} sx={{ backgroundSize: '100% auto' }} title="Card 3">
          <CardContent sx={{ minHeight: 450, display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
            <CardActions sx={{ alignSelf: 'flex-end' }}>
              <Button
                variant="contained"
                sx={{
                  boxShadow: theme.customShadows.primary,
                  ':hover': {
                    boxShadow: 'none'
                  },
                  color: "white"
                }}
              >
                {description}
              </Button>
            </CardActions>
          </CardContent>
        </CardMedia>
      </Card>
    );
  }

  return (
    <Carousel
      navButtonsAlwaysInvisible
      stopAutoPlayOnHover
      indicatorContainerProps={
        { style: { paddingTop: '20px' } }
      }
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
};

export default Banner;
