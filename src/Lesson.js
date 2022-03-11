import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Lesson.css'

function parseTime(time){
  let lessonTiming = time.split(':');
  return (parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1]) - 420) * (100/(15*60));
}

function Lesson({lessonData}) {
  let y = parseTime(lessonData.debut);
  let computedWidth = (100/lessonData.split) + "%";
  let x = ((100/lessonData.split)*lessonData.relativePos) + "%";
  console.log(x);
  return (
    <td style={{background:"red", border:'2px solid white', textAlign:'center'}}>
      {lessonData.title}
    </td>
  );
}

export default Lesson;
export {parseTime};