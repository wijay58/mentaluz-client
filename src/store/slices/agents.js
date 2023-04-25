// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import apiClient from 'api-service';
import { dispatch } from '../index';
import { insertChat } from 'store/slices/chat';

const initialState = {
  error: null,
  response: "",
  responseLoading: false,
  events: []
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
  }
});

// Reducer
export default slice.reducer;

export function setLoading(loading) {
  return () => {
    dispatch(slice.actions.setResponseLoading(loading));
  };
}

export function chat(data) {
  return async () => {
    try {
      const response = await apiClient.post(`/agents/chat`, { message: data.message });
      const newMessage = {
        /* eslint no-underscore-dangle: 0 */
        from: 'Agent',
        to: data.id,
        text: response.data.response,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      dispatch(insertChat(newMessage));
      return newMessage;
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
          group,
        }
      });
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
      const response = await apiClient.post(`/agents/${task}`, data);
      const res = response.data.response.replace(/^"(.*)"$/, '$1');
      dispatch(slice.actions.getPromptSuccess(res));
      return response;
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
