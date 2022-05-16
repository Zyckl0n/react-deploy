import React from 'react'
import Divider from '../Divider';
// including packages
const { exec } = require('child_process');


class AsciiInfo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            image: `${process.env.PUBLIC_URL}/Images/baldman1.png`
        }

        this.changeImage = this.changeImage.bind(this);
    }
    changeImage = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            });
        }
        console.log(this.state.image);
    };
    launchAscii(){

    }

    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> ASCII Art Maker </h1>
                  
                  <div className='imgText'>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>adjustable sensitivity</h1>
                            <p>As long as you want after the first render, you can just enter a number </p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/Images/bob2.PNG`} style={{width:'45%', maxWidth:"40vh"}}></img>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/Images/bob.PNG`} style={{width:'90%', maxWidth:"90vh"}}></img>
              </div>
          )
    }
}

export default AsciiInfo;