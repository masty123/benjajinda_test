import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import './App.css';
import JobStatus from './components/JobStatus/JobStatus';
import JobDescription from './components/JobDescription/JobDescription'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header className="overlap" />
        <JobStatus />
        <JobDescription />
    </div>
  );
}

export default App;
