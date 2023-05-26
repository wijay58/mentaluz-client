import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography
} from '@mui/material';

// third-party
import { FormattedMessage } from 'react-intl';
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Transitions from 'ui-component/extended/Transitions';
import UpgradePlanCard from './UpgradePlanCard';
import useAuth from 'hooks/useAuth';
import User1 from 'assets/images/users/user-round.svg';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
// assets
import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons';
import useConfig from 'hooks/useConfig';
import { useSelector } from 'store';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const { borderRadius } = useConfig();
  const navigate = useNavigate();

  const [sdm, setSdm] = useState(true);
  const [value, setValue] = useState('');
  const [notification, setNotification] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { logout } = useAuth();
  const { userData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME
    }
  });

  const myImage = cld.image(userData.imageUrl);
  const avatar = myImage.resize(thumbnail().width(40).height(40).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(150));
  /**
   * anchorRef is used on different components and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleListItemClick = (route = '') => {
    navigate(route);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
          backgroundColor: `${theme.palette.primary.main}!important`,
          color: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          // <Avatar
          //   src={User1}
          //   sx={{
          //     ...theme.typography.mediumAvatar,
          //     margin: '8px 0 8px 8px !important',
          //     cursor: 'pointer'
          //   }}
          //   ref={anchorRef}
          //   aria-controls={open ? 'menu-list-grow' : undefined}
          //   aria-haspopup="true"
          //   color="inherit"
          // />
          <Avatar>
            <AdvancedImage
              cldImg={myImage}
            />
          </Avatar>
        }
        label={
          <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {userData ? <h3>{userData.firstname}</h3> : <></>}
              <Divider orientation="vertical" variant='inset' flexItem sx={{ marginLeft: '15px', marginRight: '5px', borderWidth: '1px' }} />
              <IconSettings stroke={1.5} size="24px" color={theme.palette.primary.light} />
            </div>
          </>
        }
        variant="outlined"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />

      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 14]
            }
          }
        ]}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClose}>
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                {open && (
                  <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                    <Box sx={{ p: 2, pb: 0 }}>
                      <Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center">
                          <Typography variant="h4">Good Day,</Typography>
                          <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                            {userData?.name}
                          </Typography>
                        </Stack>
                        <Typography variant="subtitle2">{userData.firstname} {userData.lastname}</Typography>
                      </Stack>
                      <Divider />
                    </Box>
                    <PerfectScrollbar
                      style={{
                        height: '100%',
                        maxHeight: 'calc(100vh - 250px)',
                        overflowX: 'hidden'
                      }}
                    >
                      <Box sx={{ p: 2, pt: 0 }}>
                        <UpgradePlanCard />
                        <Divider />
                        <List
                          component="nav"
                          sx={{
                            width: '100%',
                            maxWidth: 350,
                            minWidth: 300,
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: '10px',
                            [theme.breakpoints.down('md')]: {
                              minWidth: '100%'
                            },
                            '& .MuiListItemButton-root': {
                              mt: 0.5
                            }
                          }}
                        >
                          <ListItemButton
                            sx={{ borderRadius: `${borderRadius}px` }}
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick('/user/profile')}
                          >
                            <ListItemIcon>
                              <IconSettings stroke={1.5} size="20px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  <FormattedMessage id="account-settings" />
                                </Typography>
                              }
                            />
                          </ListItemButton>
                          <ListItemButton
                            sx={{ borderRadius: `${borderRadius}px` }}
                            selected={selectedIndex === 4}
                            onClick={handleLogout}
                          >
                            <ListItemIcon>
                              <IconLogout stroke={1.5} size="20px" />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body2">
                                  <FormattedMessage id="logout" />
                                </Typography>
                              }
                            />
                          </ListItemButton>
                        </List>
                      </Box>
                    </PerfectScrollbar>
                  </MainCard>
                )}
              </Paper>
            </Transitions>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

export default ProfileSection;
