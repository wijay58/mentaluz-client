import { useDispatch } from 'store';
import { youtube } from 'store/slices/agents';
import axios from 'axios';
import { openSnackbar } from 'store/slices/snackbar';

export const usePromptDialog = () => {
    const dispatch = useDispatch();

    const getAgentAdvice = async (data) => {
        const response = await dispatch(youtube(data));

        if (axios.isAxiosError(response)) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: 'Limit the number of tokens per user exceeded',
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: false,
                    anchorOrigin: { vertical: 'top', horizontal: 'right' },
                    transition: 'SlideLeft'
                })
            );
        }
    };

    return { getAgentAdvice };
};
