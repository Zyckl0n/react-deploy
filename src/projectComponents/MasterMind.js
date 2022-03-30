import React from 'react'
import Divider from '../Divider';
class MasterMind extends React.Component
{
    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> MasterMind </h1>
                    <div className='imgText'>
                        <div style={{ maxWidth:"90%" }}>
                            <h1>Well.. That's the mastermind society games, But alone ! yey...</h1>
                            <p>Launch the game, a random color combination is generated, put colors into holes and then press space, The game will tell you : 1 red ticks = Good color in good postion, One white Tick is one good color in the wrong hole ! oh and you got a meme if you find the right colors x) That's pretty much it !</p>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/Images/masteminde.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
              </div>
          )
    }
}

export default MasterMind;