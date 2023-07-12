import { useState } from 'react';

export const useSearchSection = () => {
    const [isDialogOpened, setIsDialogOpened] = useState(false);

    const handleClose = () => {
        setIsDialogOpened(false);
    };

    const handleOpen = () => {
        setIsDialogOpened(true);
    };

    return { isDialogOpened, handleClose, handleOpen };
};
