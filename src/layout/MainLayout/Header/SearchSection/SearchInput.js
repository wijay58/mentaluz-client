import { styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';

export const SearchInput = styled((props) => {
    const { className, onChange, value } = props;
    const theme = useTheme();

    return (
        <div className={className}>
            <div className="search">
                <InputBase
                    placeholder="Search Tasks"
                    inputProps={{ 'aria-label': 'search tasks' }}
                    onChange={onChange}
                    value={value}
                    className="search__input"
                />
                <SearchIcon sx={{ color: theme.palette.grey[500] }} />
            </div>
        </div>
    );
})`
    .search {
        width: 100%;
        display: flex;
        border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
        padding-left: 20px;

        &__input {
            display: flex;
            width: 100%;
        }
    }
`;
