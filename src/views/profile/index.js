import { useState } from 'react';
import { Tab, Tabs, Box, Paper } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import BusinessProfile from './businessProfile';
import PersonalProfile from './personalProfile';
import { useSelector } from 'store';

const Profile = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const { userData } = useSelector((state) => state.user);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    }

    function TabPanel({ children, value, index, ...other }) {
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
            </div>
        );
    }

    const tabsOption = [
        {
            label: 'Personal',
            icon: <AccountCircleTwoToneIcon sx={{ fontSize: '1.3rem' }} />,
            premium: false
        },
        {
            label: 'Business',
            icon: <DescriptionTwoToneIcon sx={{ fontSize: '1.3rem' }} />,
            premium: false
        }
    ];

    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="simple tabs example"
                variant="scrollable"
                sx={{
                    mb: 3,
                    '& a': {
                        minHeight: 'auto',
                        minWidth: 10,
                        py: 1.5,
                        px: 1,
                        mr: 2.25,
                        color: theme.palette.grey[600],
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    '& a.Mui-selected': {
                        color: theme.palette.primary.main
                    },
                    '& .MuiTabs-indicator': {
                        bottom: 2
                    },
                    '& a > svg': {
                        marginBottom: '0px !important',
                        mr: 1.25
                    }
                }}
            >
                {tabsOption.map((tab, index) => (
                    <Tab
                        key={index}
                        disabled={tab.premium && !userData.premium}
                        component={Link}
                        to="#"
                        icon={tab.icon}
                        label={tab.label}
                        {...a11yProps(index)}
                    />
                ))}
            </Tabs>
            <TabPanel value={value} index={0}>
                <PersonalProfile />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BusinessProfile />
            </TabPanel>
        </>
    );
};

export default Profile;
