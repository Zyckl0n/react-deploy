import BigHeader from "./BigHeader";
import './MainApp.css'

function reveal() {
  var foot = document.querySelector(".foot");
  var windowHeight = window.innerHeight;
  var deepness = Math.round(window.scrollY/1000);
  var reveals = document.querySelectorAll('[data-y="' + deepness + '"]');
  var toHideTop = document.querySelectorAll('[data-y="' + (deepness+1) + '"]');
  var toHideBot = document.querySelectorAll('[data-y="' + (deepness-1) + '"]');

  for (var i = 0; i < reveals.length; i++) {
    if(reveals[i] != undefined){
      reveals[i].classList.add("active");
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
}
window.addEventListener("scroll", reveal);

function showProjectInfo(index){
  console.log(index);
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
        <div data-y="2" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
        <h1>Unity</h1> 
            <div className="buble" onClick={()=>showProjectInfo(1)} style={{position:'absolute', top:'20vh',left:'55vw', display:'flex', flexDirection:'column', width:'25vh', height:'25vh'}}>
              <h2 style={{marginBottom:'0px'}}>Rising Memories</h2>
              <img src={`${process.env.PUBLIC_URL}/Images/LogoDreamersNotes.PNG`} style={{height:'40%'}}/>
            </div>
        </div>

        <div data-y="1" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
            <h1>Web</h1> 
            <div className="buble" onClick={()=>showProjectInfo(1)} style={{position:'absolute', top:'20vh',left:'55vw', display:'flex', flexDirection:'column', width:'25vh', height:'25vh'}}>
              <h2 style={{marginBottom:'0px'}}>Dreamers Notes</h2>
              <img src={`${process.env.PUBLIC_URL}/Images/LogoDreamersNotes.PNG`} style={{height:'40%'}}/>
            </div>
            <div className="buble" onClick={()=>showProjectInfo(2)} style={{position:'absolute', top:'30vh', left:'35vw', display:'flex', flexDirection:'column', width:'25vh', height:'25vh'}}>
              <h2 style={{marginBottom:'0px'}}>My portfolio</h2>
              <img src={`${process.env.PUBLIC_URL}/logo512.png`} style={{height:'40%'}}/>
            </div>
        </div>

        <div data-y="3" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Vraiment beaucoup...
        </div>
        <div data-y="5" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           NE descend pas j'ai peur du noir !
        </div>
        <div data-y="4" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Je t'aurais prevenu !
        </div>
      </div>
    </div>
  );
}

export default MainApp;