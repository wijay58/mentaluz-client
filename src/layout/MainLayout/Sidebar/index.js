import { memo, useEffect, useMemo, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';

import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';

import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';
import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom';
import apiClient from 'api-service';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: process.env.REACT_APP_CLOUD_NAME
        }
    });

    const handlePayment = async () => {
        const response = await apiClient.get('/payments/checkout');
        window.location.href = response.data.url;
    };

    const { logout, user } = useAuth();

    const theme = useTheme();
    const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));
    const matchDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const { userData } = useSelector((state) => state.user);

    let myImage;
    const createImage = () => {
        myImage = cld.image(userData.imageUrl);
        myImage.resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).roundCorners(byRadius(150));
        return myImage;
    };
    const [image, setImage] = useState(createImage(myImage));

    useEffect(() => {
        if (userData.imageUrl) {
            setImage(createImage());
        }
    }, [userData]);

    const dispatch = useDispatch();
    const { drawerOpen } = useSelector((state) => state.menu);

    const { layout, drawerType } = useConfig();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.error(err);
        }
    };

    const Names = () => {
        return (
            <>
                {user ? <Typography variant='h4' style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>{`${user.firstname} ${user.lastname}`}</Typography> : <></>}
                <Button variant="text" style={{ textAlign: 'center' }} onClick={handleLogout}>
                    Logout
                </Button>
            </>
        );
    };

    const logo = useMemo(
        () => (
            <Box sx={{ display: 'flex', alignItems: 'center', p: 2, mx: 'auto' }}>
                <LogoSection />
            </Box>
        ),
        []
    );

    const drawer = useMemo(
        () => (
            <PerfectScrollbar
                component="div"
                style={{
                    height: !matchUpLg ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                    paddingLeft: drawerOpen ? '16px' : 0,
                    paddingRight: drawerOpen ? '16px' : 0,
                    marginTop: drawerOpen ? 0 : '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {layout === LAYOUT_CONST.VERTICAL_LAYOUT && drawerOpen && (
                    <>
                        <Link style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} to="/user/profile">
                            {/* <Avatar
                src={User1}
                sx={{
                  alignSelf: 'center',
                  width: 120,
                  height: 120,
                  margin: '8px 0 8px 8px !important',
                  cursor: 'pointer'
                }}
                ref={anchorRef}
                // aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="inherit"
              /> */}
                            <AdvancedImage cldImg={image} />
                        </Link>
                        <Names />
                    </>
                )}
                <MenuList lastItem={null} />
                {layout === LAYOUT_CONST.VERTICAL_LAYOUT && drawerOpen && !userData.premium && (
                    <>
                        <Divider sx={{ mt: 0.25, mb: 1.25 }} />
                        <Button onClick={handlePayment} variant="contained" color="warning" sx={{ boxShadow: 'none' }}>
                            Go Premium
                        </Button>
                    </>
                )}
            </PerfectScrollbar>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [matchUpLg, drawerOpen, drawerType, image]
    );

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpLg ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            {matchDownLg || (drawerType === LAYOUT_CONST.MINI_DRAWER && drawerOpen) ? (
                <Drawer
                    variant={matchUpLg ? 'persistent' : 'temporary'}
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => dispatch(openDrawer(!drawerOpen))}
                    sx={{
                        '& .MuiDrawer-paper': {
                            mt: matchDownLg ? 0 : 11,
                            zIndex: 1099,
                            width: drawerWidth,
                            background: theme.palette.background.default,
                            color: theme.palette.text.primary,
                            borderRight: 'none'
                        }
                    }}
                    ModalProps={{ keepMounted: true }}
                    color="inherit"
                >
                    {matchDownLg && logo}
                    {drawer}
                </Drawer>
            ) : (
                <MiniDrawerStyled variant="permanent" open={drawerOpen}>
                    {logo}
                    {drawer}
                </MiniDrawerStyled>
            )}
        </Box>
    );
};

export default memo(Sidebar);
