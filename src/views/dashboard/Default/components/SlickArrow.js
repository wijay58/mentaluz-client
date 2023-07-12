import { styled } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export const SlickArrow = styled((props) => {
    const { className, style, onClick } = props;

    return (
        <div className={className}>
            <button
                type="button"
                className="button"
                style={{ ...style, display: 'flex', backgroundColor: 'black', filter: 'brightness(120%)', opacity: 0.4 }}
                onClick={onClick}
            >
                <ArrowBackIosNewRoundedIcon className="icon" />
            </button>
        </div>
    );
})`
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .button {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        border: unset;
        cursor: pointer;
    }

    &::before {
        content: unset !important;
    }

    .icon {
        color: #fff;
    }
`;
