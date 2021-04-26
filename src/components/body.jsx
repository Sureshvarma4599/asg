import React from 'react'
import "../App.css"
import Logo from '../assets/temp.png'
export default function body() {
    return (
        <div>
        <div className="picture">
          
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="content">
                
           <h2>Heading Title</h2>
           <p>We are the country`s first holistic wellness flatform for men.we talk to men, Listen to them and understand their needs</p>
           
            
                <img src={Logo} style={{width:"60vw",height:"40vh"}} alt=""/>
           
            </div>
        
        
       
        </div>
        </div>
        
    )
}
