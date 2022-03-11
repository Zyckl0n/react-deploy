import './Day.css';
import React from 'react';
import './index.css';
import Lesson,{parseTime} from './Lesson';

function parseMinute(time){
  let lessonTiming = time.split(':');
  return parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1])
}

function isOverlapping(d1, d2){
    let d1i = parseMinute(d1);
    let d2i = parseMinute(d2);
    console.log(d1i);
    console.log(d2i);
    return ( d1i > d2i && d1i < d2i + 120) || ( d2i > d1i && d2i < d1i + 120);
}

function getLessonTableId(time){
  let mn = parseMinute(time);
  return Math.floor(mn/60);
}

function set(){

}
let lessonList = [
  {title:"Cour1A", debut:"8:00"},
  {title:"Cour2A", debut:"10:15"}
]
let maxOverlap = 1;
function Day() {
  
  let d1 = "8:00";
  let d2 = "9:30";

  let lessonTableAffect = [];
  for (let i = 0; i < 30; i++) {
    lessonTableAffect.push([]);
  }
  lessonTableAffect[getLessonTableId(lessonList[0].debut)].push(<Lesson lessonData={{title:"Cours 1 A", debut:d1}}/>)
  /*
  let split1 = 1;
  let split2 = 1;
  let relativePos1 = 0;
  let relativePos2 = 0;
  if(isOverlapping(d1,d2)){
    console.log("Overlap")
    split1 = 2;
    split2 = 2;
    relativePos1=0
    relativePos2=1
  }
  <Lesson lessonData={{title:"Cours 1", debut:d1, split:split1, relativePos:relativePos1}}/>
  <Lesson lessonData={{title:"Cours 2", debut:d2, split:split2, relativePos:relativePos2}}/>
  */

  return (
    <div style={{width:'100%', height:'100%', background:"#3333A1" , border:'2px solid black'}}>
      <table style={{width:'100%'}}> 
        <tr> {lessonTableAffect[0][0]}</tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  );
}

export default Day;
