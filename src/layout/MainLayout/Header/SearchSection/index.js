import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, OutlinedInput, Popper } from '@mui/material';

// third-party
import PopupState from 'material-ui-popup-state';

// assets
import { IconSearch } from '@tabler/icons';
import { shouldForwardProp } from '@mui/system';
import { SearchDialog } from './SearchDialog';

// styles
const PopperStyle = styled(Popper, { shouldForwardProp })(({ theme }) => ({
    zIndex: 1100,
    width: '99%',
    top: '-55px !important',
    padding: '0 12px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 10px'
    }
}));

const OutlineInputStyle = styled(OutlinedInput, { shouldForwardProp })(({ theme }) => ({
    width: 434,
    marginLeft: 16,
    paddingLeft: 16,
    paddingRight: 16,
    '& input': {
        background: 'transparent !important',
        paddingLeft: '4px !important'
    },
    [theme.breakpoints.down('lg')]: {
        width: 250
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 4,
        background: theme.palette.mode === 'dark' ? theme.palette.dark[800] : '#fff'
    }
}));

const HeaderAvatarStyle = styled(Avatar, { shouldForwardProp })(({ theme }) => ({
    ...theme.typography.commonAvatar,
    ...theme.typography.mediumAvatar,
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
    color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
    '&:hover': {
        background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
    }
}));

// ==============================|| SEARCH INPUT - MOBILE||============================== //

const MobileSearch = ({ value, setValue, popupState }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                ml: 2,
                mr: 3,
                [theme.breakpoints.down('md')]: {
                    mr: 2
                }
            }}
        >
            <Avatar
                variant="rounded"
                sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out',
                    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                    color: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                        background: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                        color: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.secondary.light
                    }
                }}
                // ref={anchorRef}
                // aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                // onClick={handleToggle}
                color="inherit"
            >
                <IconSearch stroke={1.5} size="20px" />
            </Avatar>
        </Box>
    );
};

MobileSearch.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    popupState: PopupState
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = styled((props) => {
    const { className } = props;
    const theme = useTheme();

    const [isDialogOpened, setIsDialogOpened] = useState(false);

    const handleClose = () => {
        setIsDialogOpened(false);
    };

    const handleOpen = () => {
        setIsDialogOpened(true);
    };

    return (
        <div className={className}>
            <div className="search">
                <div className="search__container">
                    <SearchDialog open={isDialogOpened} handleClose={handleClose} />
                    <button type="button" className="search__btn" onClick={handleOpen}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
                                color: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                                '&[aria-controls="menu-list-grow"],&:hover': {
                                    background: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.secondary.dark,
                                    color: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.secondary.light
                                }
                            }}
                            // ref={anchorRef}
                            // aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            // onClick={handleToggle}
                            color="inherit"
                        >
                            <IconSearch stroke={1.5} size="20px" />
                        </Avatar>
                    </button>
                </div>
            </div>
        </div>
    );
})`
    .search {
        &__container {
        }

        &__btn {
            background: transparent;
            border: unset;
        }
    }
`;

export default SearchSection;
