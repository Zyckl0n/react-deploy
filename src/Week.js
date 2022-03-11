import React from 'react';
import './index.css';
import './Lesson.css'
import Day from './Day'
function Week({y}) {
  return (
    <div style={{display:'flex', height:'100vh'}}>
        <Day/>
        <Day/>
    </div>
  );
}

export default Week;