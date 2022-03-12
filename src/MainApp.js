import BigHeader from "./BigHeader";
import Divider from './Divider';

function reveal() {
  
  var foot = document.querySelector(".foot");
  var windowHeight = window.innerHeight;
  var deepness = Math.round((foot.getBoundingClientRect().top - windowHeight)/1000);
  var reveals = document.querySelectorAll('[data-y="' + deepness + '"]');
  var toHideTop = document.querySelectorAll('[data-y="' + (deepness+1) + '"]');
  var toHideBot = document.querySelectorAll('[data-y="' + (deepness-1) + '"]');
  console.log(deepness);
  console.log(toHideBot[0]);

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


function MainApp() {
  return (
    <div>
      <BigHeader/>
      <div style={{paddingTop:'20vh'}}>
        <div data-y="6" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Bienvenu a la surface !
        </div>
        <div data-y="5" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           C'est l'ocean !
        </div>
        <div data-y="4" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Il y a beaucoup d'eau...
        </div>
        <div data-y="3" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Vraiment beaucoup...
        </div>
        <div data-y="2" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           NE descend pas j'ai peur du noir !
        </div>
        <div data-y="1" class="reveal" style={{color:'white', display:'flex', justifyContent:'center'}}>
           Je t'aurais prevenu !
        </div>
        <div data-y="0" class="reveal" style={{display:'flex', justifyContent:'center'}}>
          <img  class="ProfilePicture" src={`${process.env.PUBLIC_URL}/Images/profilPicture.PNG`} style={{position:'fixed'}}/>
          
        </div>
        <div data-y="0" class="reveal" style={{fontSize:'10em', color:'white', display:'flex', justifyContent:'center', top:'50vh'}}>
          Graou !
        </div>
      </div>
      
    </div>
  );
}

export default MainApp;