import { useState, useRef } from 'react';
import { Grid, Card, LinearProgress, TextField, MenuItem, Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme, styled } from '@mui/material/styles';
import SubCard from 'ui-component/cards/SubCard';
import ImageUpload from './components/imageUpload';
import { useDispatch, useSelector } from 'store';
import { updateUserProfile } from 'store/slices/user';

const Business = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(false);
  const [personalProgress, setPersonalProgress] = useState(false);
  const [contactProgress, setContactProgress] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const [bio, setBio] = useState(userData.bio);
  const [firstName, setFirstName] = useState(userData.firstname);
  const [lastName, setLastName] = useState(userData.lastname);
  const [address, setAddress] = useState(userData.address);
  const [phone, setPhone] = useState(userData.phone);

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

  const handleBioSubmit = async () => {
    setPersonalProgress(true);
    const form = new FormData();
    form.append('firstname', firstName);
    form.append('lastname', lastName);
    form.append('bio', bio);
    const data = await dispatch(updateUserProfile(form));
    if (data) {
      setPersonalProgress(false);
    }
  };
  const handleAddressSubmit = async () => {
    setContactProgress(true);
    const form = new FormData();
    form.append('address', address);
    form.append('phone', phone);
    const data = await dispatch(updateUserProfile(form));
    if (data) {
      setContactProgress(false);
    }
  };
  return (
    <Grid container spacing={5}>
      <Grid item lg={6} md={6} xs={12}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} contentSX={{ textAlign: 'center' }} title="Change Photo">
          <ImageUpload setProgress={setProgress} />
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                {progress ? <BorderLinearProgress color="secondary" /> : <></>}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} title="Personal Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic1" defaultValue={userData.firstname} onChange={(e) => setFirstName(e.target.value)} fullWidth label="First Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic1" defaultValue={userData.lastname} onChange={(e) => setLastName(e.target.value)} value={lastName} fullWidth label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static1"
                  label="Bio"
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button sx={{ width: '150px', float: 'right' }} onClick={handleBioSubmit} variant="contained" component="label" size="small">
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                {personalProgress ? <BorderLinearProgress color="secondary" /> : <></>}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <SubCard sx={{ boxShadow: theme.customShadows.primary }} title="Contact Information">
          <form noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic2" defaultValue={userData.phone} onChange={(e) => setPhone(e.target.value)} fullWidth label="Mobile" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField id="outlined-basic3" defaultValue={userData.email} disabled fullWidth label="Email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static2"
                  label="Address"
                  type='address'
                  multiline
                  fullWidth
                  rows={3}
                  defaultValue={userData.address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <AnimateButton>
                  <Button sx={{ width: '150px', float: 'right' }} onClick={handleAddressSubmit} variant="contained" component="label" size="small">
                    Submit
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                {contactProgress ? <BorderLinearProgress color="secondary" /> : <></>}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Business;
