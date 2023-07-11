import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constant';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Typography } from '@mui/material';
import * as React from 'react';

export const Tasks = styled((props) => {
    const { className, tasks, onClick } = props;

    return (
        <div className={className}>
            <div className="tasks">
                <div className="tasks__container">
                    <ul className="tasks__list">
                        {tasks.map((task) => {
                            const { _id, name } = task;

                            return (
                                <li key={_id} className="tasks__item">
                                    <Link to={ROUTES.aiProfile} state={{ task }} onClick={onClick} className="tasks__link">
                                        <AssignmentIcon sx={{ fontSize: '25px' }} />
                                        <Typography>{name}</Typography>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
})`
    .tasks {
        &__container {
        }

        &__item {
        }

        &__link {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: unset;
            color: ${({ theme }) => theme.palette.grey[900]};
            height: 48px;
            padding: 0 20px;
            border-radius: 8px;

            &:hover {
                background-color: ${({ theme }) => theme.palette.grey[300]};
            }
        }

        &__list {
            list-style-type: none;
            padding: 0;
            overflow: auto;
            height: 400px;
        }
    }
`;
