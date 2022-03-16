import BigHeader from "./BigHeader";
import './MainApp.css'

let revealed = [];

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
    deselectABuble(selectedBuble);
  }
}

window.addEventListener("scroll", reveal);

let oldLeft = 0;
let oldTop = 0;
let selectedBubleName;
let selectedBuble;

function selectABuble(buble){
  selectedBuble = buble;
  buble.classList.add("BubleClicked");
  oldLeft = buble.style.left;
  oldTop = buble.style.top;
  buble.style.left = "50vw";
  buble.style.marginLeft = "-12vh"
  buble.style.top = "0vh";
  for (var i = 0; i < revealed.length; i++) {
    if(revealed[i] != undefined && !revealed[i].classList.contains("BubleClicked")){
      revealed[i].classList.remove("active");
    }
  }
}

function deselectABuble(buble){
  selectedBuble = null;
  buble.classList.remove("BubleClicked");
  buble.style.marginLeft = "0vh"
  buble.style.left = oldLeft;
  buble.style.top = oldTop;
  for (var i = 0; i < revealed.length; i++) {
    if(revealed[i] != undefined && !revealed[i].classList.contains("BubleClicked")){
      revealed[i].classList.add("active");
    }
  }
}

function showProjectInfo(clickedName){
  selectedBubleName = clickedName;
  var buble = document.querySelector('#' + clickedName);
  if(buble.classList.contains("BubleClicked")){
    deselectABuble(buble, clickedName);
  }else{
    selectABuble(buble, clickedName);
  }
}

function MainApp() {
  return (
    <div style={{position:'fixed', width:'100%'}}>
      <BigHeader/>
      <div id="mainBodyDiv" style={{position:'relative'}}>
        <div data-y="0" class="reveal" style={{display:'flex', justifyContent:'center'}}>
          <h1>Welcome ! Scroll down to discover some of my old project, But... dont go to deep, some of my projects are.. Pretty Obscure</h1>
          <img  class="ProfilePicture" src={`${process.env.PUBLIC_URL}/Images/profilPicture.PNG`}/>
        </div>
        <div data-y="6" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
        <h1>Cursed Land</h1> 
            <div className="cursedbuble" onClick={()=>showProjectInfo(1)} style={{position:'absolute', top:'20vh',left:'55vw', display:'flex', flexDirection:'column', width:'25vh', height:'25vh'}}>
              <h2 style={{marginBottom:'0px'}}>Some Dark project</h2>
            </div>
        </div>

        <div style={{color:'white', display:'flex', justifyContent:'center'}}>
            <h1 data-y="1" class="reveal">Web</h1> 
            <div data-y="1" id="DreamersNotesBuble" className="reveal buble" onClick={()=>showProjectInfo("DreamersNotesBuble")} style={{position:'absolute', top:'20vh',left:'55vw'}}>
              <h2 style={{marginBottom:'0px'}}>Dreamers Notes</h2>
              <img src={`${process.env.PUBLIC_URL}/Images/LogoDreamersNotes.PNG`} style={{height:'40%'}}/>
            </div>
            <div data-y="1" id="MyPortfolioBuble" className="reveal buble" onClick={()=>showProjectInfo("MyPortfolioBuble")} style={{position:'absolute', top:'20vh',left:'30vw'}}>
              <h2 style={{marginBottom:'0px'}}>My portfolio</h2>
              <img src={`${process.env.PUBLIC_URL}/logo512.png`} style={{height:'40%'}}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MainApp;