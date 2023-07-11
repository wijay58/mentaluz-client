import { api } from './api';

export const tasksApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query({
            query: () => '/tasks'
        })
    })
});
