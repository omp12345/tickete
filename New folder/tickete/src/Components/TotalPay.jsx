import React from 'react'
import  "./Total.css"
import icon from "../assets/infor.png"
function TotalPay() {
  return (
    <>
<div className='total_pay'>
<div className="heading">
    <h3 className='head_content'>Total Payable: $XXX</h3>
</div>
<div className='section'>
<div className="container">
<div className="icon">
    <img src={icon} alt="" />

</div>
<div className="content1">
<div className='mini_content'>
    <h5 className='AED_message'>You will be charged in AED</h5>
    <p className='message'>
    The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).
    </p>
</div>
</div>
</div>

</div>
</div>
    </>
  )
}

export default TotalPay
