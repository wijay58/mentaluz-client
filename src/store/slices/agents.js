// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import apiClient from 'api-service';
import { dispatch } from '../index';
import { insertChat } from 'store/slices/chat';

const initialState = {
    error: null,
    response: '',
    responseLoading: false,
    editPrompt: false,
    updatePrompt: false,
    updatePromptTask: null,
    task: null,
    prompt: null,
    events: [],
    agentList: []
};

const slice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET EVENTS
        getEventsSuccess(state, action) {
            state.events = action.payload;
        },

        // GET RESPONSE
        getPromptSuccess(state, action) {
            state.response = action.payload;
        },

        // SET LOADING
        setResponseLoading(state, action) {
            state.responseLoading = action.payload;
        },

        setEditPrompt(state, action) {
            state.editPrompt = action.payload;
        },

        setTask(state, action) {
            state.task = action.payload;
        },

        setPrompt(state, action) {
            state.prompt = action.payload;
        },

        setUpdatePrompt(state, action) {
            state.updatePrompt = action.payload;
        },

        setUpdatePromptTask(state, action) {
            state.updatePromptTask = action.payload;
        },

        getAgentsSuccess(state, action) {
            state.agentList = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

export function setLoading(loading) {
    return () => {
        dispatch(slice.actions.setResponseLoading(loading));
    };
}

export function setEditPrompt(loading) {
    return () => {
        dispatch(slice.actions.setEditPrompt(loading));
    };
}

export function setTheTask(task) {
    return () => {
        dispatch(slice.actions.setTask(task));
    };
}

export function setLastPrompt(prompt) {
    return () => {
        dispatch(slice.actions.setPrompt(prompt));
    };
}

export function setUpdatePrompt(prop) {
    return () => {
        dispatch(slice.actions.setUpdatePrompt(prop));
    };
}

export function setUpdatePromptTask(task) {
    return () => {
        dispatch(slice.actions.setUpdatePromptTask(task));
    };
}

export function chat(data) {
    return async () => {
        try {
            const response = await apiClient.post(`/agents/chat`, { message: data.message, conversation: data.conversation });
            const newMessage = {
                /* eslint no-underscore-dangle: 0 */
                from: 'Agent',
                to: data.id,
                text: response.data.message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            dispatch(insertChat(newMessage));
            return { newMessage, conversation: response.data.conversation };
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getTasks(group) {
    return async () => {
        try {
            const response = await apiClient.get(`/tasks`, {
                params: {
                    group
                }
            });
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getTaskGroupsBySpecialist(specialist) {
    return async () => {
        try {
            const response = await apiClient.get(`/tasks/groups`, {
                params: {
                    specialist
                }
            });
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getAIAgents() {
    return async () => {
        try {
            const response = await apiClient.get(`/specialists`);
            dispatch(slice.actions.getAgentsSuccess(response.data));
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function saveFav(data) {
    return async () => {
        try {
            const response = await apiClient.post(`/Favorites`, data);
            return response.data;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function youtube(props) {
    const { data, task } = props;
    return async () => {
        try {
            throw new Error('error message');

            // const response = await apiClient.post(`/agents/${task}`, data);
            // const res = response.data.response;
            // dispatch(slice.actions.getPromptSuccess(res));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
