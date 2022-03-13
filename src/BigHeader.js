import './BigHeader.css';
import React from 'react';
import Divider from './Divider';
  class BigHeader extends React.Component {
    
    constructor(props) {
      super(props);
      this.infoIsEnabled = false;
      this.profilInfoRef = React.createRef();
    }

    OpenProfilDetails(){
        if(!this.infoIsEnabled){
            this.profilInfoRef.current.classList.add("Deployed");
            this.profilInfoRef.current.classList.remove("unDeployed");
        }else{
            this.profilInfoRef.current.classList.remove("Deployed");
            this.profilInfoRef.current.classList.add("unDeployed");
        }
        this.infoIsEnabled = !this.infoIsEnabled;  
    }

    render() {
      return (
        <div style={{justifyContent:'center', textAlign:'-webkit-center', height:'fit-content', width:'100%'}}>
            <Divider spaceTop={'1vh'}/>
            <div class="headBand">
                <div onClick={()=>this.OpenProfilDetails()} class="BigName">
                    Thibault Roche
                </div> 
            </div>
            <div ref={this.profilInfoRef} className="profilInfo unDeployed">
                <div style={{justifyContent:'center'}}>
                    <h1>Who am I ?</h1>
                    <div style={{width:'100%'}}>
                        <p>I'm a French developer living in Poitiers, Currently student in the university of my town, I'm doing a lot of small fun projects in different language to improve my skills</p>
                        <br/>
                        <p>Check it out ! But dont go too deep if you dont wanna get lost...</p>

                    </div>
                </div>
            </div>
            <Divider spaceTop={'1vh'}/>
        </div>
      );
    }
  }
  
  export default BigHeader;