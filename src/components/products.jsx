import React, { Component } from 'react'
import '../App.css'
import Axios from 'axios'
import Logo from '../assets/pro.jpg'
export default class Products extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
       // this.razorPayHandler = this.razorPayHandler(this);
    
      }
      
      countHandler=()=>{
         var count=0;
         
         console.log(count);
     }
      async razorPayPaymentHandler() {
        const API_URL = `https://payasgg.herokuapp.com/razorpay/`
        const orderUrl = `${API_URL}order`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        console.log("App -> razorPayPaymentHandler -> data", data)
        
        const options = {
          key: '',
          name: "vignesh",
          description: "payment",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API_URL}capture/${paymentId}`;
             const captureResponse = await Axios.post(url, {})
             const successObj = JSON.parse(captureResponse.data)
             const captured = successObj.captured;
             console.log("App -> razorPayPaymentHandler -> captured", successObj)
             if(captured){
                 console.log('success')
             }
             
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#050000",
          },
        };
       
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
      
    render() {
        return (
            <div>
                 
                 <div className="card">
               <img src={Logo} style={{width:"100%",height:"200px"}} alt=""/>
               <strong style={{backgroundColor:"black",color:"white",width:"20%"}}>⭐ 4.5</strong>
               <h5>Hair Fall Control Shampoo</h5>
             
               <p style={{backgroundColor:"#F5F5F5"}}> <strong>For :</strong>Hair fall Reduction </p>
               <p style={{backgroundColor:"#F5F5F5"}}> <strong>With :</strong>Keratin  Biotin vitamin B5 </p>
               <p > <strong>Rs 399</strong> <strike>₹1194</strike> 🎉 17% off </p>
               <div className="btn">
               <button style={{width:"50%",backgroundColor:"#DAD7D7",border:"2px solid #DAD7D7",color:"black"}} onClick={this.countHandler}>Add to Cart</button><button style={{width:"50%"}} onClick={this.razorPayPaymentHandler}>Buy Now</button>
               </div>
                </div>
           
            </div>
        )
    }
}
