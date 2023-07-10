import { useEffect, useState } from 'react';
import { useDispatch } from 'store';
import { getAIAgents } from 'store/slices/agents';
import Card1 from 'assets/images/cards/card-1.png';
import Card2 from 'assets/images/cards/card-2.png';
import Card3 from 'assets/images/cards/card-3.png';
import Card4 from 'assets/images/cards/card-4.png';
import Card5 from 'assets/images/cards/card-5.png';
import Card6 from 'assets/images/cards/card-6.png';

export const useAgents = () => {
    const dispatch = useDispatch();
    const [agents, setAgents] = useState([]);

    const getAgents = async () => {
        const list = await dispatch(getAIAgents());

        const tempList = JSON.parse(JSON.stringify(list));

        tempList[0].image = Card1;
        tempList[1].image = Card2;
        tempList[2].image = Card3;
        tempList[3].image = Card4;
        tempList[4].image = Card5;
        tempList[5].image = Card6;

        setAgents(tempList);
    };

    useEffect(() => {
        getAgents();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [flipped, setFlipped] = useState(new Set());

    const handleClick = (agentId) => (e) => {
        e.preventDefault();

        const flip = new Set();

        flip.add(agentId);

        setFlipped((prevState) => {
            if (prevState.has(agentId)) return new Set();

            flip.add(agentId);

            return new Set(flip);
        });
    };

    const getIsFlipped = (agentId) => {
        return flipped.has(agentId);
    };

    return { getIsFlipped, agents, handleClick };
};
