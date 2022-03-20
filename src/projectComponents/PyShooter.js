import React from 'react'

class PyShooter extends React.Component
{
    render(){
          return (
              <div>
                  <video className='VideoTag' autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/Video/pyshooterDemo.mp4`} type='video/mp4'/>
                    </video>
              </div>
          )
    }
}

export default PyShooter;