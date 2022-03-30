import React from 'react'
import Divider from '../Divider';
class AsciiInfo extends React.Component
{
    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> ASCII Art Maker </h1>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/risk1.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>A reworked society games</h1>
                            <p>As it is said in the name, Pyshooter is a multiplayer game, Using a client and a server script, Once a server is launch, you can join it in order to see other player and kill them ! Use yhe keyboard to move and your mouse to shoot</p>
                        </div>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Many features from the old games, And new ones !</h1>
                            <p>As it is said in the name, Pyshooter is a multiplayer game, Using a client and a server script, Once a server is launch, you can join it in order to see other player and kill them ! Use yhe keyboard to move and your mouse to shoot</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/Images/risk2.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/risk3.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>4 Players fight !</h1>
                            <p>As it is said in the name, Pyshooter is a multiplayer game, Using a client and a server script, Once a server is launch, you can join it in order to see other player and kill them ! Use yhe keyboard to move and your mouse to shoot</p>
                        </div>
                    </div>
              </div>
          )
    }
}

export default AsciiInfo;