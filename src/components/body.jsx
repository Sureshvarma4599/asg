import React from 'react'
import "../App.css"
import Logo from '../assets/spry.png'
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
           
            
              <h2>What`s your concern?</h2>
           <div className="spry">
               
               <div className="rect" >
                   <img src={Logo}  style={{width:"60%",height:"60%"}} alt=""/>
                   <p>Hair</p>
               </div>
               <div className="rect"  >
               <img src={Logo} style={{width:"60%",height:"60%"}} alt=""/>
               <p>Skin</p>
               </div>
               <div className="rect" >
               <img src={Logo} style={{width:"60%",height:"60%"}} alt=""/>
               <p>Weight</p>
               </div>
           </div>
            </div>
        
        
       
        </div>
        </div>
        
    )
}
