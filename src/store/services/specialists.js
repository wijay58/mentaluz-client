import { api } from './api';
import Card1 from 'assets/images/cards/card-1.png';
import Card2 from 'assets/images/cards/card-2.png';
import Card3 from 'assets/images/cards/card-3.png';
import Card4 from 'assets/images/cards/card-4.png';
import Card5 from 'assets/images/cards/card-5.png';
import Card6 from 'assets/images/cards/card-6.png';

const AGENTS_IMAGES = {
    'Social Media Expert': Card1,
    'Email Expert': Card2,
    'Copy Writing Expert': Card3,
    'Face-to-Face Sales Coach': Card4,
    'Business Coach': Card5,
    'Relationship Coach': Card6
};

export const specialistsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getSpecialists: build.query({
            query: () => '/specialists',
            transformResponse: (agents) => {
                return agents.map((agent) => {
                    const { name, imageUrl } = agent;
                    const image = AGENTS_IMAGES[name] ?? imageUrl;

                    return { ...agent, image };
                });
            }
        })
    })
});
