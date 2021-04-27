import React from 'react'
import "../App.css"
import Logo from '../assets/pro.jpg'
export default function Products() {
    return (
        
               
                <div className="card">
               <img src={Logo} style={{width:"100%",height:"200px"}} alt=""/>
               <strong style={{backgroundColor:"black",color:"white",width:"20%"}}>⭐ 4.5</strong>
               <h5>Hair Fall Control Shampoo</h5>
             
               <p style={{backgroundColor:"#F5F5F5"}}> <strong>For :</strong>Hair fall Reduction </p>
               <p style={{backgroundColor:"#F5F5F5"}}> <strong>With :</strong>Keratin  Biotin vitamin B5 </p>
               <p > <strong>Rs 399</strong> <strike>₹1194</strike> 🎉 17% off </p>
               <div className="btn">
               <button style={{width:"50%",backgroundColor:"#DAD7D7",border:"2px solid #DAD7D7",color:"black"}}>Add to Cart</button><button style={{width:"50%"}}>Buy Now</button>
               </div>
                </div>
           
        
    )
}
