import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';
import { styled } from '@mui/material/styles';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = styled(({ className }) => (
    <Link className={className} component={RouterLink} to={DASHBOARD_PATH}>
        <Logo />
    </Link>
))`
    display: flex;
    height: 100%;
`;

export default LogoSection;
