import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/',
})


export const getAllTasks = () => {
    return tasksApi.get('/');
}

export const getTaskById = (id) => {
    return tasksApi.get(`/${id}`);
}

export const createTask = (tasks) => {
    return tasksApi.post('/', tasks);
}

export const deleteTask = (id) => {
    return tasksApi.delete(`/${id}`);
}

export const updateTask = (id, tasks) => {
    return tasksApi.put(`/${id}/`, tasks);
}