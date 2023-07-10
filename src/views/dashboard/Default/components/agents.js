import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import { AgentItem } from './AgentItem';
import { SlickArrow } from './SlickArrow';
import { useAgents } from '../hooks/useAgents';

const NextArrow = styled(SlickArrow)`
    .icon {
        transform: rotate(180deg);
    }
`;

const PrevArrow = styled(SlickArrow)``;

const SLICK_SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 660,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

const Agents = styled((props) => {
    const { className } = props;
    const { agents, getIsFlipped, handleClick } = useAgents();

    return (
        <div className={className}>
            <Slider {...SLICK_SETTINGS}>
                {agents.map((agent) => {
                    const { _id } = agent;

                    return <AgentItem key={_id} agent={agent} handleClick={handleClick(_id)} isFlipped={getIsFlipped(_id)} />;
                })}
            </Slider>
        </div>
    );
})`
    .slick-arrow {
        width: 40px;
        height: 40px;

        &::before {
            font-size: 40px;
        }
    }

    .slick-list {
        padding-bottom: 20px;
    }

    .slick-next {
        right: 20px;
    }

    .slick-prev {
        left: 10px;
        z-index: 1;
    }
`;

export default Agents;
