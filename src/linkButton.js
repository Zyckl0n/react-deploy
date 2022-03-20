import React from 'react'
import './linkButton.css'

class LinkButton extends React.Component
{
    constructor(props){
        super()
        this.text = props.text;
        this.link = props.link;
    }

    render(){
          return <a href={this.link}><button className='linkBtn' >{this.text}</button>  </a>;
    }
}

export default LinkButton;