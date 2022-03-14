import React from 'react';
import './index.css';
import './Lesson.css'
import Day from './Day'
function Week({y}) {
  let amount_of_day = 2;
  return (
    <div style={{display: 'flex', height:'100vh'}}>
      <Day />
      <Day />
      
    </div>
  );
  <div style={{position:'relative', width:'100px', height:'100px', border:'2px solid black', display:'flex'}}>
      <div style={{position : 'absolute', top:'0px', right:'0px', background:'red'}}>
        1
      </div>

      <div style={{position : 'absolute', top:'30%', right:'50%', background:'blue'}}>
        2
      </div>

      <div style={{position : 'absolute', bottom:'5px', left:'10px', background:'green', width:"100%"}}>
        3
      </div>
    </div>
}

export default Week;