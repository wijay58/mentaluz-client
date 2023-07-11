import { DialogContent, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import * as React from 'react';
import { Dialog } from './Dialog';
import { SearchInput } from './SearchInput';
import { Tasks } from './Tasks';
import { useSearchDialog } from './hooks/useSearchDialog';

export const SearchDialog = styled((props) => {
    const { open, handleClose, className } = props;

    const { localHandleClose, filteredTasks, handleChange, value } = useSearchDialog({ handleClose });

    return (
        <Dialog
            maxWidth="lg"
            fullWidth
            open={open}
            onClose={localHandleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={className}
            disablePortal
        >
            <div className="dialog">
                <DialogTitle sx={{ marginBottom: '1rem' }} id="alert-dialog-title">
                    <IconButton
                        aria-label="close"
                        onClick={localHandleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500]
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="dialog__content">
                    <div className="dialog__search">
                        <SearchInput value={value} onChange={handleChange} onClick={localHandleClose} />
                    </div>
                    <div className="dialog__tasks">
                        <Tasks tasks={filteredTasks} onClick={localHandleClose} />
                    </div>
                </DialogContent>
            </div>
        </Dialog>
    );
})`
    .dialog {
        &__content {
        }
    }
`;
