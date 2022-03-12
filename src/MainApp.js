import BigHeader from "./BigHeader";
import Divider from './Divider';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


function MainApp() {
  return (
    <div>
      <BigHeader/>
      <div style={{paddingTop:'10vh'}}>
        <div class="reveal" style={{display:'flex', justifyContent:'center'}}>
          <img data-y="3" class="ProfilePicture" src={`${process.env.PUBLIC_URL}/Images/profilPicture.PNG`} style={{position:'fixed'}}/>
        </div>
      </div>
      
    </div>
  );
}

export default MainApp;