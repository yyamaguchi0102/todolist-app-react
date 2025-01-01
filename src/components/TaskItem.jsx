import React from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TaskItem = ({ task, loadTasks }) => {
    const toggleComplete = async () => {
        await fetch(`http://localhost:8080/tasks/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...task, complete: !task.complete }),
        });
        loadTasks();
    };

    const deleteTask = async () => {
        await fetch(`http://localhost:8080/tasks/${task.id}`, {
            method: 'DELETE',
        });
        loadTasks();
    };

    return (
        <li className={`flex justify-between items-center p-4 rounded-lg shadow ${task.complete ? 'bg-green-50' : 'bg-gray-50'}`}>
            <div>
                <p className={`font-medium ${task.complete ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.description}
                </p>
                <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                <p className="text-sm text-gray-600">Due: {task.dueDate || 'No due date'}</p>
            </div>
            <div className="flex space-x-2">
                <button onClick={toggleComplete} className="btn btn-green">
                    <FaCheck />
                </button>
                <button onClick={deleteTask} className="btn btn-red">
                    <FaTrash />
                </button>
            </div>
        </li>
    );
};

export default TaskItem;