import { Card, CardMedia, CardContent, Grid, Typography, CardActions, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Card3 from 'assets/images/cards/card-3.jpg';
import Card2 from 'assets/images/cards/card-2.jpg';
import Card1 from 'assets/images/cards/card-1.jpg';
import Carousel from 'react-material-ui-carousel';

const Banner = () => {
  const theme = useTheme();

  const items = [
    {
      image: Card2,
      description: "Order Now"
    },
    {
      image: Card1,
      description: "Try Now"
    },
    {
      image: Card3,
      description: "Get In"
    }
  ];

  function Item(props) {
    const { item } = props;
    const { image, description } = item;
    return (
      <Card sx={{ boxShadow: theme.customShadows.primary, marginTop: '12px' }}>
        <CardMedia image={image} title="Card 3">
          <CardContent sx={{ minHeight: 300, display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
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
