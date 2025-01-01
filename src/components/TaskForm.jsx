import React, { useState } from 'react';

const TaskForm = ({ loadTasks }) => {
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('LOW');
    const [dueDate, setDueDate] = useState('');

    const handleAddTask = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description, priority, dueDate }),
        });
        setDescription('');
        setPriority('LOW');
        setDueDate('');
        loadTasks();
    };

    return (
        <form onSubmit={handleAddTask} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
                className="input-field mb-4"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="select-dropdown mb-4"
            >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="input-field mb-4"
            />
            <button type="submit" className="btn btn-blue w-full">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;