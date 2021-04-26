import React from 'react'
import Logo from '../assets/d.png'
import '../App.css'
export default function Footer() {
    return (
        <div className="footer">
            <div className="img">
           <img src={Logo} style={{width:"45%",height:"60%"}} alt=""/>
            </div>
            <div>
            <div className="quote">
                <p><strong>1.Help us know you</strong></p>
                <p>Know what you are looking for? Browse ourcarefully crafted solutions not sure what will work for you? Schedule a free online consultation with our renowned experts</p>
            </div>
            <div className="quote">
            <p><strong>2.Help us know you</strong></p>
                <p>Know what you are looking for? Browse ourcarefully crafted solutions not sure what will work for you? Schedule a free online consultation with our renowned experts</p> 
            </div>
            <div className="quote">
            <p><strong>3.Help us know you</strong></p>
                <p>Know what you are looking for? Browse ourcarefully crafted solutions not sure what will work for you? Schedule a free online consultation with our renowned experts</p>
            </div>
            </div>
        </div>
    )
}
