import { useState } from 'react';
import { specialistsApi } from 'store/services';

export const useAgents = () => {
    const { data: agents = [] } = specialistsApi.useGetSpecialistsQuery();

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
