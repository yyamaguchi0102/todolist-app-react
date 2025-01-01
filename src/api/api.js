const BASE_URL = 'http://localhost:8080';

export const fetchTasks = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json();
};

export const postTask = async (task) => {
    const response = await fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to add task');
};

export const deleteTask = async (id) => {
    const response = await fetch(`${BASE_URL}/removeTask/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete task');
};