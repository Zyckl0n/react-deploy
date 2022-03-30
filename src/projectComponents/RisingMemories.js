import React from 'react'
import Divider from '../Divider';
class RMInfo extends React.Component
{
    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> Rising Memories </h1>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/RisingMemories1.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>2D Plateformer video game</h1>
                            <p>From starting menu to the end of a game, This project is a full playable game, Launch a game, explore a dungeon, find and collect weapons items and upgrade, use your keyboard to move and use special powers, use your mouse to shoot everythink that wont let you pass !</p>
                        </div>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Procedurally generated dungeons </h1>
                            <p>Unlimited replayability, each time you start a run, each items, each monster positions, and even the shape of the dungeon itself is totally random and will be different from all your other tries !</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/Images/RisingMemories2.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/RisingMemories3.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>a LOT of random items</h1>
                            <p>Find a dragon, take him under your arm, pull his tail to make him spit fire and Booom that's a new weapon ! Want a regular shotgun ? There's one too ! Want the big fucking gun from DOOM ? Well we have made a even bigger gun ! </p>
                        </div>
                    </div>
                    
              </div>
          )
    }
}

export default RMInfo;