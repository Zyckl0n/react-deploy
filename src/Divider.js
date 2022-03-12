import './Divider.css';

function Divider({spaceTop, spaceBot, color}) {
    if(spaceBot == undefined){
        spaceBot = spaceTop;
    }
    if(color == undefined){
        color = 'rgb(240, 248, 255)'
    }
    return (
      <div style={{justifyContent:'center', display:'flex', width:'100%'}}>
          <div class="Divider" style={{marginTop:spaceTop, marginBottom:spaceBot, background:color}}/>
      </div>
    );
  }
  
  export default Divider;