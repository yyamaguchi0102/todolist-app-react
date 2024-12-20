import React from 'react';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';
import UpdateTaskForm from './UpdateTaskForm.jsx';

const App = () => {
    return (  
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8">To-Do List App</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <TaskForm />
                <UpdateTaskForm />
            </div>
            <TaskList />
        </div>
    );
};

export default App;