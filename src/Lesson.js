import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Lesson.css'

function parseTime(time){
  let lessonTiming = time.split(':');
  return (parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1]) - 420) * (100/(15*60));
}

function Lesson({lessonData}) {
  let y = parseTime(lessonData.debut) + "%";
  let computedWidth = (100/lessonData.divider) + "%";
  let x = ((100/lessonData.divider)*lessonData.relativePos) + "%";
  return (
    <div style={{textAlign:'center', position : 'relative', top:y,border:'1px solid black', background:'green', width:'200%', height:'14%'}}>
      {lessonData.title}
    </div>
  );
}

export default Lesson;
export {parseTime};