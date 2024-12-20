import React, { useState, useEffect } from 'react';
import Task from './Task';
import InteractiveButton from './InteractiveButton';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [showIncomplete, setShowIncomplete] = useState(false);

    const fetchTasks = async () => {
        const endpoint = showIncomplete ? '/incomplete' : '/tasks';
        try {
            const response = await fetch(endpoint);
            if (response.ok) {
                const data = await response.json();
                setTasks(data);
            } else {
                console.error('Failed to fetch tasks');
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            const response = await fetch(`/removeTask/${taskId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error deleting task');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleCompletion = async (taskId, completion) => {
        try {
            const response = await fetch(`/updateCompletion`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: taskId, completed: completion }),
            });
            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error updating task completion');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const updateTaskPriority = async (taskId) => {
        console.log(`Update priority for task ${taskId}`);
    };

    useEffect(() => {
        fetchTasks();
    }, [showIncomplete]);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold mb-4">Task List</h2>
            <button
                onClick={() => setShowIncomplete(!showIncomplete)}
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
                {showIncomplete ? 'Show All Tasks' : 'Show Incomplete Tasks'}
            </button>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        deleteTask={deleteTask}
                        toggleCompletion={toggleCompletion}
                        updateTaskPriority={updateTaskPriority}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;