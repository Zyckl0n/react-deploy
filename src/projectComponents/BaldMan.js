import React from 'react'
import Divider from '../Divider';
class BaldMan extends React.Component
{
    render(){
          return (
              <div className='ProjectInfoContent'>
                  <h1> BaldMan Adventure </h1>
                    <div className='imgText'>
                        <img src={`${process.env.PUBLIC_URL}/Images/baldman2.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>2D basic plateformer</h1>
                            <p>This was one of my first project, The plot is pretty simple, You're bald (really bald, not the halfway all man will know when they reach 40) And so... you kill everythink that have hair on their head with your super lazer sunglasses ! oh, And also you have a energy shield, so this game have more than one button (appart from mouvement)</p>
                        </div>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Really bad games.. BUT !</h1>
                            <p>After learning the base of programation, i was 14 so... I decided to make a games ! Without knowing anything about game engine or even librairy, and because of that i had to make a collision detection, gravity system... entirely from scratch, then i had to learn how to optimise collision detection in order to make it work on my 2014 crappy old computer, iwas proud of it and that's why i wanted to show it here !</p>
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/Images/baldman1.png`} style={{width:'45%', maxWidth:"40vh"}}></img>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'>
                        <video style={{width: "50%"}} autoPlay loop muted>
                            <source src={`${process.env.PUBLIC_URL}/Video/baldman.mp4`} type='video/mp4'/>
                        </video>
                        <div style={{ maxWidth:"48%" }}>
                            <h1>Write, Load, Explore !</h1>
                            <p>To create a level, you just have to write a file (txt) Load it, and play it ! type a "g" for grass, a "1" for a ennemy of difficulty 1, "p" for plateform... Just look at the image under and you'll understand :p</p>
                        </div>
                    </div>
                    <Divider spaceTop="3vh"/>
                    <div className='imgText'><p>How to make a level ? Just like this.</p></div>
                    <img src={`${process.env.PUBLIC_URL}/Images/Baldman4.png`} style={{width:'90%', marginTop:"1vh"}}></img>
              </div>
          )
    }
}

export default BaldMan;