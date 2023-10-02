import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // Import the AWS Amplify configuration

Amplify.configure(awsconfig); // Configure AWS Amplify

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, uncomment the line below.
// reportWebVitals();

