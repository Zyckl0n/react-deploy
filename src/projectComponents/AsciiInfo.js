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
        console.log(exec);
        exec('echo hello',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            });
    }

    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> ASCII Art Maker </h1>
                    <button onClick={()=>this.launchAscii()}>Launch !</button>
                    <input type="file" name="myImage" onChange={this.changeImage}/>
                    <img style={{width: "50vw"}} src={this.state.image}/>
              </div>
          )
    }
}

export default AsciiInfo;