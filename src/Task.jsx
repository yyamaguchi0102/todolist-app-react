import React from 'react';
import InteractiveButton from './InteractiveButton';

const Task = ({ task, deleteTask, toggleCompletion, updateTaskPriority }) => {
    return (
        <li className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row md:justify-between items-center mb-4">
            <div className="mb-4 md:mb-0">
                <strong className="text-lg font-semibold">{task.description}</strong>
                <p className="text-sm text-gray-600">Priority: {task.priority}</p>
                <p className="text-sm text-gray-600">Due: {task.dueDate ? new Date(task.dueDate).toLocaleString() : 'No due date'}</p>
                <p className="text-sm text-gray-600">Completed: {task.completed ? 'Yes' : 'No'}</p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => toggleCompletion(task.id, !task.completed)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                    {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button
                    onClick={() => updateTaskPriority(task.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                    Update Priority
                </button>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Delete Task
                </button>
            </div>
        </li>
    );
};

export default Task;