import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import your main App component
import './styles/tailwind.css'; // Import Tailwind for styling

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is where your app attaches to the HTML
);