import React, { useState } from 'react';
import InteractiveButton from './InteractiveButton';

const TaskForm = ({ refreshTasks }) => {
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('LOW');
    const [dueDate, setDueDate] = useState('');

    const addTask = async () => {
        try {
            const response = await fetch('/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description, priority, dueDate }),
            });

            if (response.ok) {
                setDescription('');
                setPriority('LOW');
                setDueDate('');
                refreshTasks();
            } else {
                console.error('Failed to add task');
            }
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
                className="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
            >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
            </select>
            <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <button
                onClick={addTask}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskForm;