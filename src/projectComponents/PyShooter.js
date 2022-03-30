import React from 'react'
import Divider from '../Divider';

class PyShooter extends React.Component
{
    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> PyShooter Multiplayer !</h1>
                    <video style={{width: "90%"}} autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/Video/pyshooterDemo.mp4`} type='video/mp4'/>
                    </video>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/pyShooter1.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Multiplayer 2D shooter</h1>
                            <p>As it is said in the name, Pyshooter is a multiplayer game, Using a client and a server script, Once a server is launch, you can join it in order to see other player and kill them ! Use yhe keyboard to move and your mouse to shoot</p>
                        </div>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Handmade from scratch</h1>
                            <p>This project was one my first one, I didnt know anything about librairy or modules that i could have use to send and received object, so i invented a protocole to made my game working, here you can see a server running (with debug log enabled)</p>
                        </div>
                        <video style={{width: "30%%"}} autoPlay loop muted>
                            <source src={`${process.env.PUBLIC_URL}/Video/pyshooterCommunication.mp4`} type='video/mp4'/>
                        </video>
                    </div>
              </div>
          )
    }
}

export default PyShooter;