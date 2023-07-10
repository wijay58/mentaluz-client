import { styled } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export const SlickArrow = styled((props) => {
    const { className, style, onClick } = props;
    return (
        <button
            type="button"
            className={className}
            style={{ ...style, display: 'block', backgroundColor: 'black', filter: 'brightness(120%)', opacity: 0.4 }}
            onClick={onClick}
        >
            <ArrowBackIosNewRoundedIcon className="icon" />
        </button>
    );
})`
    height: 40px;
    width: 40px;
    border-radius: 50%;

    &::before {
        content: unset !important;
    }

    .icon {
        color: #fff;
    }
`;
