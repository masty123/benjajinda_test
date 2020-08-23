import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header'
import './App.css';
import JobStatus from './components/JobStatus/JobStatus';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        {/* <JobStatus /> */}
    </div>
  );
}

export default App;
