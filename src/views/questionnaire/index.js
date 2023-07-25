import { useState, useRef } from 'react';
import { Grid, Typography, RadioGroup, Radio, FormControlLabel, Button, LinearProgress } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import MainCard from 'ui-component/cards/MainCard';
import { questionnaire, setLoading } from 'store/slices/agents';
import { styled, useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'store';
import ResponseBox from 'views/aiProfile/components/responseBox';

const Questionnaire = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { responseLoading } = useSelector((state) => state.agents);

  const onSubmit = async (e) => {
    e.preventDefault();
    const indices = [];
    for (let i = 0; i < 27; i += 1) {
      const radio = document.getElementsByName(`radio-${i}`);
      if (!radio[0].checked) {
        indices.push(i);
      }
    }
    dispatch(setLoading(true));
    await dispatch(questionnaire(indices));
    dispatch(setLoading(false));
  };

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

  const questions = [
    "Are you satisfied with your current marketing strategy?",
    "Are you satisfied with your current marketing ROI?",
    "Are you using multiple social media channels for marketing?",
    "Have you considered influencer marketing?",
    "Are you using organic marketing such as blog posts or videos on social media?",
    "Are you satisfied with your conversation rates on your landing page and product page?",
    "Have you A/B tested your website for optimal conversion?",
    "Are you monitoring cart abandonment rates?",
    "Have you optimized your checkout process for user experience?",
    "Do you offer multiple payment options for customers?",
    "Are you getting traffic through search engines?",
    "Have you conducted keyword research to identify target keywords?",
    "Are you creating quality content regularly to improve your SEO?",
    "Do you monitor your website's technical SEO health?",
    "Have you implemented a backlink strategy?",
    "Are you satisfied with current social media presence?",
    "Do you have a social media strategy in place?",
    "Are you consistently posting on social media?",
    "Have you identified your target audience?",
    "Are you leveraging user generated content?",
    "Are you working with ambassadors and/or influencers?",
    "Are you ads targeted towards your ideal customer persona?",
    "Do you have a plan for handling negative comments or a crisis?",
    "Have you received negative reviews or complaints about your product?",
    "Is your product difficult to use or understand?",
    "Is the demand for your product declining over time?",
    "Are customers frequently asking for features or improvements?"
  ];

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
            marginBottom: '2rem'
          }}
        >
          <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
              {questions.map((question, index) => (
                <>
                  <Grid item xs={8}>
                    <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                      {question}
                    </Typography>
                  </Grid>
                  <Grid sx={{ display: "flex", justifyContent: "end" }} item xs={4}>
                    <RadioGroup
                      row
                      defaultValue="yes"
                      name={`radio-${index}`}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                  </Grid>
                </>
              ))}
              <Grid item xs={12}>
                <Button variant="contained" type='submit' sx={{ marginTop: '10px', float: "right" }}>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </MainCard>
        <ResponseBox type="questionnaire" />
        <Grid>{responseLoading ? <BorderLinearProgress color="secondary" /> : <></>}</Grid>
      </Grid>
    </Grid>
  );
};

export default Questionnaire;
