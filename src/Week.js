import React from 'react';
import './index.css';
import './Lesson.css'
import Day from './Day'

function parseMinute(time){
  let lessonTiming = time.split(':');
  return parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1])
}

function isOverlapping(d1, d2){
    let d1i = parseMinute(d1);
    let d2i = parseMinute(d2);
    return ( d1i >= d2i && d1i <= d2i + Line.duree) || ( d2i >= d1i && d2i <= d1i + Line.duree);
}

class Crenaux{
  constructor(){
    this.width = -1;
    this.x = -1;
    this.maxDiv = -1;
    this.lessonData = {};

  }
}

class Line{
  static duree = 120;
  constructor(_heure){
    this.heure = _heure;
    this.crenaux = [];
  }

  addCrenaux(cren){
    this.crenaux.push(cren);
  }

  fillMaxDiv(){

  }
}

class TimeTable{
  lines = [];

  constructor(){
    for (let i = 0; i < 840/Line.duree; i++) {
      this.lines.push(new Line(i*Line.duree));
    }
  }
}

function Week({y}) {
  let test = new TimeTable();
  console.log(test);
  let amount_of_day = 2;
  return (
    <div style={{display: 'flex', height:'100vh'}}>
      <Day />
      <Day />
      
    </div>
  );
}

export default Week;