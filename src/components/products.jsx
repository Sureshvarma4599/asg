import React from 'react'
import "../App.css"
import Logo from '../assets/pro.jpg'
export default function Products() {
    return (
        
               
                <div className="card">
               <img src={Logo} style={{width:"100%",height:"200px"}} alt=""/>
               <h5>Hair Fall Control Shampoo</h5>
               <p> <strong>For :</strong>Hair fall Reduction </p>
               <p> <strong>With :</strong>Keratin  Biotin vitamin B5 </p>
               <p> <strong>Rs 399</strong> <strike>₹1194</strike> 🎉 17% off </p>
               <div className="btn">
               <button style={{width:"50%",backgroundColor:"white",color:"black"}}>Add to Cart</button><button style={{width:"50%"}}>Buy Now</button>
               </div>
                </div>
           
        
    )
}
