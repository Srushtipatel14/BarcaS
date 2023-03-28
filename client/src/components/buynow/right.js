import React from 'react';
import { useEffect, useState } from 'react';

const Right = ({iteam}) => {

  const [price,setPrice]=useState(0);

  useEffect(()=>{

     
  const totalAmount=()=>{
    let price=0;
    iteam.map((item)=>{
      price=item.price.cost+price;
      return price;
    })
    setPrice(price);
  }

    totalAmount();

  },[iteam]);


  return (
    
    <div className="right_buy">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg"  />
        
        <div className="cost_right">
            <p>Your Order is Eligibal For Free Delivery</p><br/>
            <span style={{color:"#565959"}}>Select this option at Checkout. Details</span>
            <h3>Subtotal ({iteam.length}item):<span style={{fontWeight:700}}>₹{price}.00</span></h3>
            <button className='rightbuy_btn'>Process to buy</button>
            <div className="emi">
                Emi available
            </div>
        </div>
    </div>
    
  )
}

export default Right