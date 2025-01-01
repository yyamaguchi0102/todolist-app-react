import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import CalendarView from './CalendarView';
import '../styles/tailwind.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const loadTasks = async () => {
        const response = await fetch('http://localhost:8080/tasks');
        const data = await response.json();
        setTasks(data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4 dark:bg-gray-900">
                {/* Header */}
                <header className="flex justify-between items-center p-4 bg-blue-600 dark:bg-gray-800 text-white">
                    <h1 className="text-3xl font-bold">Advanced To-Do List</h1>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-black"
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </header>

                {/* Main Content */}
                <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                        <TaskForm loadTasks={loadTasks} />
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                        <TaskList tasks={tasks} loadTasks={loadTasks} />
                        <CalendarView tasks={tasks} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;