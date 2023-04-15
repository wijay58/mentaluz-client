import { useState } from 'react';
import { Grid, Typography, Button, Avatar, LinearProgress, Card, Tooltip } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Avatar1 from 'assets/images/users/user-1.png';
import SubCard from 'ui-component/cards/SubCard';
import Members from './components/members';
import { useTheme, styled } from '@mui/material/styles';
import Business from './components/business';
import Notifications from './components/notifications';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import useAuth from 'hooks/useAuth';
import apiClient from 'api-service';
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'store';
import { updateUserProfile } from 'store/slices/user';

const Profile = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME
    }
  });
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(false);
  const myImage = cld.image(userData.imageUrl);
  const avatar = myImage.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(150));
  const [image, setImage] = useState(avatar);

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 15,
    borderRadius: 5,
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5
    }
  }));

  const handleTooltipOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    const text = document.getElementById('link').innerHTML;
    navigator.clipboard.writeText(text);
    handleTooltipOpen();
  };

  const returnFileSize = (number) => {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  };

  const getImage = async (e) => {
    setProgress(true);
    const Imagefile = e.target.files[0];
    const fileSize = returnFileSize(Imagefile.size);
    if (fileSize > '5 MB') {
      alert('Image file size must be less than 5 MB');
    } else {
      const fd = new FormData();
      fd.append("file", Imagefile);
      fd.append("upload_preset", "xrysp5lf");
      const options = {
        method: 'POST',
        body: fd,
      };
      fetch("https://api.cloudinary.com/v1_1/wijay58/image/upload", options)
        .then(async (res) => {
          const resData = await res.json();
          const form = new FormData();
          form.append('imageUrl', resData.public_id);
          const userData = await dispatch(updateUserProfile(form));
          setImage(cld.image(userData.imageUrl));
          setProgress(false);
        })
        .catch((err) => {
          console.log(err);
          setProgress(false);
        });
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item sm={6} md={6} xs={12}>
        <Typography variant="h2" sx={{ marginBottom: '10px' }}>
          Profile
        </Typography>
        <SubCard sx={{ boxShadow: theme.customShadows.primary, padding: '10px' }} contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <Avatar alt="User 1" src={Avatar1} sx={{ width: 150, height: 150, margin: '0 auto' }} /> */}
              <AdvancedImage
                cldImg={image}
                plugins={[lazyload]}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <AnimateButton>
                <Button sx={{ width: '150px' }} variant="contained" component="label" size="small">
                  Import
                  <input hidden accept="image/*" type="file" />
                </Button>
              </AnimateButton> */}
            </Grid>
            <Grid item xs={12}>
              <AnimateButton>
                <Button sx={{ width: '150px' }} variant="contained" component="label" size="small">
                  Change Photo
                  <input id="fileInput" onChange={getImage} hidden accept="image/*" name="avatar" type="file" />
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </SubCard>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: theme.customShadows.primary, marginY: '10px' }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs>
                {progress ? <BorderLinearProgress color="secondary" /> : <></>}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Affiliate Link
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SubCard sx={{ boxShadow: theme.customShadows.primary }} contentSX={{ textAlign: 'left' }}>
            <Grid container alignItems='center' spacing={2}>
              <Grid item xs={12} md={6} lg={9}>
                <Typography variant="h3" id='link' sx={{ marginBottom: '5px', overflow: 'auto' }}>
                  www.mentaluz.com/affiliate/123456789
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Tooltip
                  placement="top"
                  open={open}
                  title="Copied to clipboard"
                >
                  <AnimateButton>
                    <Button sx={{ width: '150px', marginBottom: '5px' }} onClick={copyToClipboard} variant="contained" size="small">
                      Copy
                    </Button>
                  </AnimateButton>
                </Tooltip>
                <AnimateButton>
                  <Button sx={{ width: '150px' }} variant="contained" size="small">
                    Send
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ marginTop: '20px', marginBottom: '10px' }}>
            Members
          </Typography>
          <Members />
        </Grid>
      </Grid>
      <Grid item sm={6} md={6} xs={12}>
        <Business />
        <Notifications />
      </Grid>
    </Grid>
  );
};

export default Profile;
