import React, { useState } from 'react';
import InteractiveButton from './InteractiveButton';

const UpdateTaskForm = ({ refreshTasks }) => {
    const [taskId, setTaskId] = useState('');
    const [priority, setPriority] = useState('LOW');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    const updatePriority = async () => {
        try {
            const response = await fetch(`/updatePriority`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: taskId, priority }),
            });
            if (response.ok) {
                refreshTasks();
            } else {
                console.error('Error updating priority');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateDueDate = async () => {
        try {
            const response = await fetch(`/updateDueDate`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: taskId, dueDate }),
            });
            if (response.ok) {
                refreshTasks();
            } else {
                console.error('Error updating due date');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateCompletion = async () => {
        try {
            const response = await fetch(`/updateCompletion`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: taskId, completed }),
            });
            if (response.ok) {
                refreshTasks();
            } else {
                console.error('Error updating completion');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Update Task</h2>
            <input
                type="text"
                value={taskId}
                onChange={(e) => setTaskId(e.target.value)}
                placeholder="Task ID"
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
            <button
                onClick={updatePriority}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full mb-4"
            >
                Update Priority
            </button>
            <input
                type="datetime-local"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full mb-4"
            />
            <button
                onClick={updateDueDate}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-4"
            >
                Update Due Date
            </button>
            <label className="inline-flex items-center mt-4 mb-4">
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                    className="form-checkbox text-blue-600"
                />
                <span className="ml-2">Completed</span>
            </label>
            <button
                onClick={updateCompletion}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
            >
                Update Completion
            </button>
        </div>
    );
};

export default UpdateTaskForm;
