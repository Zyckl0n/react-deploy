import BigHeader from "./BigHeader";
import './MainApp.css'
import DreamersNotes from "./projectComponents/DreamersNotes";
import MyPortfolio from "./projectComponents/MyPortfolio";
import PyShooter from  "./projectComponents/PyShooter";
import React, { useState } from 'react'

let revealed = [];
let theMainApp;

function reveal() {
  var deepness = Math.round(window.scrollY/1000);
  revealed = document.querySelectorAll('[data-y="' + deepness + '"]');
  var toHideTop = document.querySelectorAll('[data-y="' + (deepness+1) + '"]');
  var toHideBot = document.querySelectorAll('[data-y="' + (deepness-1) + '"]');

  for (var i = 0; i < revealed.length; i++) {
    if(revealed[i] != undefined){
      revealed[i].classList.add("active");
    }
  }
  for (var i = 0; i < toHideTop.length; i++) {
    if(toHideTop[i] != undefined){
      toHideTop[i].classList.remove("active");
    }
  }
  for (var i = 0; i < toHideBot.length; i++) {
    if(toHideBot[i] != undefined){
      toHideBot[i].classList.remove("active");
    }
  }
  if(selectedBuble != null){
    theMainApp.deselectABuble(selectedBuble);
  }
}

window.addEventListener("scroll", reveal);

let selectedBubleName;
let selectedBuble;


class MainApp extends React.Component{
  constructor(){
    super();
    this.state = {
      projectInfo: <DreamersNotes/>
    }
  }

  componentDidMount(){
    theMainApp = this;
  }

  selectABuble(buble){
    selectedBuble = buble;
    buble.classList.add("BubleClicked");
    for (var i = 0; i < revealed.length; i++) {
      if(revealed[i] != undefined){
        revealed[i].classList.remove("active");
      }
    }
  }
  
  deselectABuble(buble){
    let projectDetail = document.querySelector("#projectDetail");
    projectDetail.classList.remove("active");
    buble.classList.remove("BubleClicked");
    for (var i = 0; i < revealed.length; i++) {
      if(revealed[i] != undefined){
        revealed[i].classList.add("active");
      }
    }
  }
  
  showProjectInfo(clickedName, component){
    selectedBubleName = clickedName;
    var buble = document.querySelector('#' + clickedName);
    if(buble.classList.contains("BubleClicked")){
      this.deselectABuble(buble, clickedName);
    }else{
      this.selectABuble(buble, clickedName);
      let projectDetail = document.querySelector("#projectDetail");
      projectDetail.classList.add("active");
      this.setState({projectInfo: component})
    }
  }

  render(){
    return (
      <div style={{position:'fixed', width:'100%'}}>
        <BigHeader/>
        <div id="mainBodyDiv">
        <div id="projectDetail" className="reveal" >
          <div id="closeButton" onClick={()=>this.showProjectInfo(selectedBubleName)}>X</div>
          {this.state.projectInfo}
        </div>
          <div data-y="0" class="reveal active" style={{display:'flex', justifyContent:'center'}}>
            <h1>Welcome ! Scroll down to discover some of my old project, But... dont go to deep, some of my projects are.. Pretty Obscure</h1>
            <img  class="ProfilePicture" src={`${process.env.PUBLIC_URL}/Images/profilPicture.PNG`}/>
          </div>
          
          <div style={{color:'white', display:'flex', justifyContent:'center'}}>
              <h1 data-y="1" class="reveal">Web</h1> 
              <div data-y="1" id="DreamersNotesBuble" className="reveal buble" onClick={()=>this.showProjectInfo("DreamersNotesBuble", <DreamersNotes/>)} style={{position:'absolute', top:'20vh',left:'55vw'}}>
                <h2>Dreamers Notes</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/LogoDreamersNotes.png`} style={{height:'40%'}}/>
              </div>
              <div data-y="1" id="MyPortfolioBuble" className="reveal buble" onClick={()=>this.showProjectInfo("MyPortfolioBuble", <MyPortfolio/>)} style={{position:'absolute', top:'25vh',left:'20vw'}}>
                <h2>My portfolio</h2>
                <img src={`${process.env.PUBLIC_URL}/logo512.png`} style={{height:'40%'}}/>
              </div>
          </div>

          <div style={{color:'white', display:'flex', justifyContent:'center'}}>
              <h1 data-y="2" class="reveal">Unity</h1> 
              <div data-y="2" id="DreamersNotesBuble" className="reveal buble" onClick={()=>this.showProjectInfo("DreamersNotesBuble", <DreamersNotes/>)} style={{position:'absolute', top:'25vh',left:'57vw'}}>
                <h2>Rising Memories</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/RisingMemories.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
              <div data-y="2" id="MyPortfolioBuble" className="reveal buble" onClick={()=>this.showProjectInfo("MyPortfolioBuble", <MyPortfolio/>)} style={{position:'absolute', top:'15vh',left:'20vw'}}>
                <h2>Dancing Lines</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/DancingLine.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
          </div>

          <div style={{color:'white', display:'flex', justifyContent:'center'}}>
              <h1 data-y="3" class="reveal">C++</h1> 
              <div data-y="3" id="DreamersNotesBuble" className="reveal buble" onClick={()=>this.showProjectInfo("DreamersNotesBuble", <DreamersNotes/>)} style={{position:'absolute', top:'25vh',left:'38vw'}}>
                <h2>ASCII Art Maker</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/ascii.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
          </div>

          <div style={{color:'white', display:'flex', justifyContent:'center'}}>
              <h1 data-y="5" class="reveal">Python</h1> 
              <div data-y="5" id="pyShooterBuble" className="reveal buble" onClick={()=>this.showProjectInfo("pyShooterBuble", <PyShooter/>)} style={{position:'absolute', top:'25vh',left:'45vw'}}>
                <h2>Py-Shooter Multiplayer</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/pyShooter1.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
              <div data-y="5" id="MyPortfolioBuble" className="reveal buble" onClick={()=>this.showProjectInfo("MyPortfolioBuble", <MyPortfolio/>)} style={{position:'absolute', top:'15vh',left:'20vw'}}>
                <h2>Risk online</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/risk1.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
              <div data-y="5" id="MyPortfolioBuble" className="reveal buble" onClick={()=>this.showProjectInfo("MyPortfolioBuble", <MyPortfolio/>)} style={{position:'absolute', top:'55vh',left:'65vw'}}>
                <h2>Mastermind</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/masteminde.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
              <div data-y="5" id="MyPortfolioBuble" className="reveal buble" onClick={()=>this.showProjectInfo("MyPortfolioBuble", <MyPortfolio/>)} style={{position:'absolute', top:'52vh',left:'12vw'}}>
                <h2>Baldman Adventures</h2>
                <img src={`${process.env.PUBLIC_URL}/Images/baldman2.png`} style={{height:'40%', borderRadius:"50%"}}/>
              </div>
          </div>

          <div data-y="6" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
          <h1>Cursed Land</h1> 
              <div className="cursedbuble" style={{position:'absolute', top:'20vh',left:'55vw', display:'flex', flexDirection:'column', width:'25vh', height:'25vh'}}>
                <h2 style={{marginBottom:'0px'}}>Some Dark project</h2>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;