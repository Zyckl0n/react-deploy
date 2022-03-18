import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Lesson.css'

function parseTime(time){
  let lessonTiming = time.split(':');
  return (parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1]) - 420) * (100/(15*60));
}

function Lesson({lesson}) {
  let y = parseTime(lesson.lessonData.debut) + "%";
  let x = lesson.x + "%";
  let width = lesson.width + "%";

  let lessonHeight = ((lesson.lessonData.duree / 840)*100)+"%";

  return (
    <div style={{textAlign:'center', position : 'absolute', top:y, left:x,border:'1px solid black', background:'green', width:width, height:lessonHeight}}>
      {lesson.lessonData.title}
    </div>
  );
}

export default Lesson;
export {parseTime};