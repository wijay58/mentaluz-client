import { memo, useMemo, useRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, Stack, useMediaQuery, Avatar, Button } from '@mui/material';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MenuCard from './MenuCard';
import MenuList from '../MenuList';
import LogoSection from '../LogoSection';
import MiniDrawerStyled from './MiniDrawerStyled';
import Chip from 'ui-component/extended/Chip';

import LAYOUT_CONST from 'constant';
import useConfig from 'hooks/useConfig';
import { drawerWidth } from 'store/constant';

import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';
import User1 from 'assets/images/users/user-round.svg';
import { display } from '@mui/system';
import useAuth from 'hooks/useAuth';
import { Link } from 'react-router-dom';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = () => {
  const { logout, user } = useAuth();
  const anchorRef = useRef(null);
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

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
        {user ? <h3 style={{ textAlign: 'center' }}>{`${user.firstname} ${user.lastname}`}</h3> : <></>}
        <Button variant='text' style={{ textAlign: 'center' }} onClick={handleLogout}>Logout</Button>
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
          height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
          paddingLeft: drawerOpen ? '16px' : 0,
          paddingRight: drawerOpen ? '16px' : 0,
          marginTop: drawerOpen ? 0 : '20px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {layout === LAYOUT_CONST.VERTICAL_LAYOUT && drawerOpen &&
          <>
            <Link style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} to='/user/profile'>
              <Avatar
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
              />
            </Link>
            <Names />
          </>
        }
        <MenuList lastItem={null} />
        {layout === LAYOUT_CONST.VERTICAL_LAYOUT && drawerOpen && <MenuCard />}
        {layout === LAYOUT_CONST.VERTICAL_LAYOUT && drawerOpen && (
          <Stack direction="row" justifyContent="center" sx={{ mb: 2 }}>
            <Chip
              label={process.env.REACT_APP_VERSION}
              disabled
              chipcolor="secondary"
              size="small"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        )}
      </PerfectScrollbar>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matchUpMd, drawerOpen, drawerType]
  );

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
      {matchDownMd || (drawerType === LAYOUT_CONST.MINI_DRAWER && drawerOpen) ? (
        <Drawer
          variant={matchUpMd ? 'persistent' : 'temporary'}
          anchor="left"
          open={drawerOpen}
          onClose={() => dispatch(openDrawer(!drawerOpen))}
          sx={{
            '& .MuiDrawer-paper': {
              mt: matchDownMd ? 0 : 11,
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
          {matchDownMd && logo}
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
