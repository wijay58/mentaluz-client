import { useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, MobileStepper, Button } from '@mui/material';
import Card2 from 'assets/images/cards/card-2.jpg';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';

const AIAgents = () => {
  const [currentCategories, setCurrentCategories] = useState([1, 2, 3, 4]);
  const theme = useTheme();
  const categories = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleNext = () => {
    const lastEl = currentCategories[currentCategories.length - 1];
    if (categories[categories.length - 1] !== lastEl) {
      const newCats = currentCategories;
      newCats.shift();
      newCats.push(lastEl + 1);
      setCurrentCategories([...newCats]);
    }
  };

  const handlePrevious = () => {
    const firstEl = currentCategories[0];
    if (categories[0] !== firstEl) {
      const newCats = currentCategories;
      newCats.pop();
      newCats.unshift(firstEl - 1);
      setCurrentCategories([...newCats]);
    }
  };

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Select Category
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={7}>
              {currentCategories.map((category) => (
                <Grid sx={{ cursor: 'pointer' }} key={category} item lg={3} md={4} xs={6}>
                  <CardMedia component="img" sx={{ borderRadius: '20px', minHeight: '8rem', maxHeight: '8rem' }} image={Card2} />
                  <Typography variant='subtitle1' style={{ textAlign: 'center' }}>Marketing {category}</Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
        <MobileStepper
          variant="progress"
          steps={6}
          position="static"
          activeStep={1}
          sx={{ float: 'right', maxWidth: 400, flexGrow: 1, backgroundColor: 'transparent' }}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={1 === 5}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handlePrevious} disabled={1 === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default AIAgents;
