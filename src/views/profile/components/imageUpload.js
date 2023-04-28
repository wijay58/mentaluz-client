import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, lazyload } from '@cloudinary/react';
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { useDispatch, useSelector } from 'store';
import { updateUserProfile } from 'store/slices/user';

const ImageUpload = (props) => {
  const dispatch = useDispatch();
  const { setProgress } = props;
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME
    }
  });

  const { userData } = useSelector((state) => state.user);
  const myImage = cld.image(userData.imageUrl);
  const avatar = myImage.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(150));
  const [image, setImage] = useState(avatar);

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
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
  );
};

export default ImageUpload;
