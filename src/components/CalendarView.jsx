import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ tasks }) => {
    const getTaskDates = () =>
        tasks.map((task) => new Date(task.dueDate).toDateString());

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Task Calendar</h2>
            <Calendar
                tileClassName={({ date }) =>
                    getTaskDates().includes(date.toDateString()) ? 'bg-blue-200' : ''
                }
            />
        </div>
    );
};

export default CalendarView;