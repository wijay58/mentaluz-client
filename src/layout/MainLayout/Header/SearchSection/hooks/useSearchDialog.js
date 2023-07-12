import { tasksApi } from 'store/services';
import { useEffect, useState } from 'react';

export const useSearchDialog = ({ handleClose }) => {
    const [value, setValue] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);

    const { data: tasks = [] } = tasksApi.useGetTasksQuery();

    const handleChange = (event) => {
        const { value: currentValue } = event.currentTarget;

        const currentFilteredTasks = tasks.filter(({ name }) => name.toLowerCase().includes(currentValue.toLowerCase()));

        setFilteredTasks(currentFilteredTasks);
        setValue(currentValue);
    };
    useEffect(() => {
        if (tasks.length && !filteredTasks.length) {
            setFilteredTasks(tasks);
        }
    }, [tasks]);

    const localHandleClose = () => {
        handleClose();
        setValue('');
        setFilteredTasks(tasks);
    };

    return { localHandleClose, filteredTasks, handleChange, value };
};
