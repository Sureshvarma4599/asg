import React from 'react'
import Nav from './navbar'
import Body from './body'
import { Scrollbars } from 'react-custom-scrollbars';
import Footer from './footer'
import '../App.css'
import Product from './products'
export default function Landingpage() {
    return (
        
            <React.Fragment>
           <Nav/> 
           <Body/>
           <div className="next">
            <h2>Not Sure where to start? We can Help</h2>
            <p>Lets understand you a bit by asking a few questions before you talk to our experts </p>

            <button> Get Started</button>
        </div>
        <div className="next">
        <h2>New Launches</h2>
        </div>
       
        <div className="list">
           
            <br/>
            <div className="l">
         <button id="btn" style={{borderRadius:"20px 0px 0px 20px"}}>skin</button>
         <button id="btn">hair</button>
         <button id="btn"style={{borderRadius:"0px 20px 20px 0px"}}>weight</button>
         </div>
         </div>
           <div className="pro">
              
               <div>
               <Product/>
               </div>
         <div>
         <Product/>
         </div>
           <div>
           <Product/>
           </div>
         
           </div>
         
           <div className="next">
            <h2>Not Sure where to start? We can Help</h2>
            <p>Lets understand you a bit by asking a few questions before you talk to our experts </p>

            <button> Get Started</button>
        </div>
        <div className="next">
        <h2>How it Works</h2>
        </div>
        <Footer/>
           </React.Fragment>
        
    )
}
