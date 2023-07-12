import { styled } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export const SlickArrow = styled((props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className}>
            <button
                type="button"
                className="button"
                style={{ ...style, display: 'flex', backgroundColor: 'black', filter: 'brightness(120%)' }}
                onClick={onClick}
            >
                <ArrowBackIosNewRoundedIcon className="icon" />
            </button>
        </div>
    );
})`
    height: 100% !important;
    width: 50px !important;
    display: flex !important;
    align-items: center;
    justify-content: center;

    &::before {
        content: unset !important;
    }

    &:hover .button {
        transition: all 0.2s ease-in-out;
        opacity: 0.4;
        pointer-events: unset;
    }

    .button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: unset;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease-in-out;
    }

    .icon {
        color: #fff;
    }
`;
