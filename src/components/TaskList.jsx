import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, loadTasks }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            {tasks.length === 0 ? (
                <p className="text-center text-gray-600">No tasks available!</p>
            ) : (
                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task} loadTasks={loadTasks} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;