import React from 'react';
import './index.css';
import './Lesson.css'
import Day from './Day'


function parseMinute(time){
  let lessonTiming = time.split(':');
  return (parseInt(lessonTiming[0])*60 + parseInt(lessonTiming[1])) - 480
}

function isOverlapping(d1, d2){
    let d1i = parseMinute(d1);
    let d2i = parseMinute(d2);
    return ( d1i >= d2i && d1i <= d2i + Line.duree) || ( d2i >= d1i && d2i <= d1i + Line.duree);
}

let lessonList = [
  {title:"Cour1", debut:"8:00", duree: 120},
  {title:"Cour2", debut:"9:00", duree: 120},
  {title:"Cour3", debut:"8:00", duree: 120},
  {title:"Cour4", debut:"8:00", duree: 120},
  {title:"Cour3", debut:"10:15", duree: 120},
  {title:"Cour4", debut:"10:15", duree: 120},
  {title:"Cour5", debut:"14:00", duree: 120}
]

class Crenaux{
  static compareX(a, supposedB, widthB){
    // a must be fixed.
    if(a.x == -1){
      return 0;
    }
    if(supposedB < a.x+a.width && supposedB + widthB > a.x){
      return a.width;
    }else{
      return 0;
    }
  }

  constructor(data){
    this.width = -1;
    this.x = -1;
    this.lessonData = data;
  }

  getDebut(){
    return this.lessonData.debut;
  }

  getDuree(){
    return this.lessonData.duree;
  }


}

class Line{
  static duree = 60;
  

  constructor(_heure, tt){
    this.heure = _heure;
    this.crenaux = [];
    this.startedHere = [];
    this.timetable = tt;
  }

  changeLineLength(new_length){
    while(this.crenaux.length < new_length){
      this.crenaux.push(null);
    }
  }

  addCrenaux(cren){
    let found = -1;
    for (let i = 0; i < this.crenaux.length; i++) {
      const element = this.crenaux[i];
      if(element == null){
        found = i;
        break;
      }
    }
    if(found == -1){
      found = this.crenaux.length;
      this.timetable.changeAllLineLength(found+1);
    }

    this.crenaux[found] = cren;
    this.startedHere[found] = true;
    return found;
  }

  getInfluenced(cren, index){
    this.crenaux[index] = cren;
    this.startedHere[index] = false;
  }

  getLength(){
    return this.crenaux.length;
  }

  assignX(){
    this.crenaux.forEach(cren => {
      if(cren != null){
        if(cren.x == -1){
          let offset = 0;
          let oldOffset = -1;
          while(offset != oldOffset){ // Stabilité
            oldOffset = offset;
            this.crenaux.forEach(other => {
              if(other != null){
                offset += Crenaux.compareX(other, offset, cren.width);
              }
            });
          }
          if(offset>100){console.log("ALED C'EST LA MERDE ");}
          cren.x = offset
        }
      }
    });
  }
}

class TimeTable{
  lines = [];
  allcrenaux = [];

  constructor(){
    for (let i = 0; i < 1+(840/Line.duree); i++) {
      this.lines.push(new Line(i*Line.duree, this));
    }
  }

  addCrenaux(cren){
    this.allcrenaux.push(cren)
    let indexDepart = Math.floor(parseMinute(cren.getDebut()) / Line.duree);
    let indexOfLesson = this.lines[indexDepart].addCrenaux(cren);
    for (let i = 1; i < cren.getDuree()/Line.duree; i++) {
      this.lines[indexDepart+i].getInfluenced(cren, indexOfLesson);
    }
  }

  changeAllLineLength(new_length){
    this.lines.forEach(line => {
      line.changeLineLength(new_length);
    });
  }

  assignMaxDivWidth(){
    let w = 100 / this.lines[0].getLength();
    this.allcrenaux.forEach(cren => {
      cren.width = w;
    });
  }

  assignX(){
    this.lines.forEach(line => {
      line.assignX();
    });
  }

  prepareToBeShown(){
    this.assignMaxDivWidth();
    this.assignX();
  }
}

function Week({y}) {
  let test = new TimeTable();
  test.addCrenaux(new Crenaux(lessonList[0]));
  test.addCrenaux(new Crenaux(lessonList[1]));
  test.prepareToBeShown();
  console.log(test);


  return (
    <div style={{display: 'flex', height:'100vh'}}>
      <Day />
      <Day />
    </div>
  );
}

export default Week;