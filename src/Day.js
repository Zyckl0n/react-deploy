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
    return ( d1i >= d2i && d1i <= d2i + 120) || ( d2i >= d1i && d2i <= d1i + 120);
}

function getLessonTableId(time){
  let mn = parseMinute(time);
  return Math.floor( (mn-420)/120);
}

let lessonList = [
  {title:"Cour1", debut:"8:00"},
  {title:"Cour2", debut:"8:00"},
  {title:"Cour3", debut:"8:00"},
  {title:"Cour4", debut:"8:00"},
  {title:"Cour3", debut:"9:15"},
  {title:"Cour4", debut:"10:15"},
  {title:"Cour5", debut:"14:00"}
]

function Day() {
  let lessonReadyToShow = [];
  let overLapCounter = [10];
  for (let i = 0; i < 10; i++) {
    overLapCounter[i] = 0;
  }

  lessonList.map(item1=>{
    let cspl = 0;
    let i = getLessonTableId(item1.debut);
    lessonList.map(item2=>{
      if(isOverlapping(item1.debut, item2.debut)){
        cspl = cspl + 1;
      }
    });
    lessonReadyToShow.push({
      divider: cspl,
      title: item1.title,
      debut: item1.debut,
      index: overLapCounter[i]
    })
    overLapCounter[i]++;
  })


  return (
    <div style={{width:'100%', height:'100%',display:'flex', background:"#3333A1" , border:'2px solid black', position:'relative'}}>
      {
        lessonReadyToShow.map(lesson => (
          <Lesson lessonData={{ relativePos:lesson.index, title:lesson.title, divider: lesson.divider, debut: lesson.debut}}/>
          ))
      }
    </div>
  );
}

export default Day;
