import React from 'react'
import MyPortfolio from './MyPortfolio'
import LinkButton from '../linkButton'
class DreamersNotes extends React.Component
{
    render(){
          return(
            <>
                <h1>Dreamers notes</h1>
                <br/>
                <div className='imgText'>
                    <div style={{ maxWidth:"48%" }}>
                        <h1>A giant wall to hang your idea</h1>
                        <p>This web site is designed to be a giant whiteboard filled with idea written on small paper like post it, you can explore it just by mooving your mouse around like on google map, and if you find a interessting title clic on it to show information and comment it !</p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/Images/DreamersNotesScreenshot1.PNG`} style={{width:'45%', maxWidth:"40vh"}}></img>
                </div>
                <br/>
                <div className='imgText'>
                    <img src={`${process.env.PUBLIC_URL}/Images/DreamersNotesScreenshot2.PNG`} style={{width:'45%', maxWidth:"40vh"}}></img>
                    <div style={{ maxWidth:"48%" }}>
                        <h1>A anonymous and free website</h1>
                        <p>A website instantly usable even without registration, Go on it, write your idea without follow up as a unamed, and then one day, maybe someone, someday will make it real !</p>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <LinkButton text="Visit the website" link="https://dreamersnotes.fr/"/>
            </>
          ) 
    }
}

export default DreamersNotes;