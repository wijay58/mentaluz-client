import { useState, useRef } from 'react';
import { Grid, Typography, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';

const Questionnaire = () => {
  const [first, setFirst] = useState("no");
  const [second, setSecond] = useState("no");
  const theme = useTheme();

  const handleFirst = (_, newFirst) => {
    setFirst(newFirst);
  };

  const handleSecond = (_, newSecond) => {
    setSecond(newSecond);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(first, second);
  };

  return (
    <Grid container>
      <Grid item md={10} xl={9} lg={10} xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Questionnaire
        </Typography>
        <MainCard
          sx={{
            bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
            boxShadow: theme.customShadows.primary,
          }}
        >
          <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                  Are you going to use this product?
                </Typography>
              </Grid>
              <Grid sx={{ display: "flex", justifyContent: "end" }} item xs={4}>
                <RadioGroup
                  row
                  value={first}
                  onChange={handleFirst}
                  name="radio-first"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                  Are you going to use this product?
                </Typography>
              </Grid>
              <Grid item sx={{ display: "flex", justifyContent: "end", alignItems: "start" }} xs={4}>
                <RadioGroup
                  row
                  value={second}
                  onChange={handleSecond}
                  name="radio-second"
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type='submit' sx={{ marginTop: '10px', float: "right" }}>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Questionnaire;
