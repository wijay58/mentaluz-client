import { css, styled } from '@mui/material/styles';
import { Dialog as _Dialog } from '@mui/material';

export const Dialog = styled(_Dialog)`
    & .MuiPaper-root {
        max-width: 670px;
    }

    & .MuiDialogContent-root {
        padding: 0 50px;

        ${({ theme }) => ({
            [theme.breakpoints.down('sm')]: css`
                padding: 0 20px;
            `
        })};
    }
`;
