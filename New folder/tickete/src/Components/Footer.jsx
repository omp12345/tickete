import React from 'react'
import "./Footer.css"
import logo from "../assets/Logo.png"
function Footer() {
  return (
    <>
    <div className='main_footer'>
    <div className='footer_logo'>
      <div className='logo'>
<img src={logo} alt="" />
      </div>

    </div>
    <div className='hr'>
   
    </div>
    <div className='frame_text'>
<div className='last_content'>
<span className='span'>
Made with ❤️
</span>
<span className='dot'>•</span>
<span className='privacy'>
Privacy policy</span>
<span className='dot'>•</span>
<span className='privacy'>

Terms of usage</span>
<span className='dot'>•</span>
<span className='privacy'>

Cancellation policy</span>
<span className='dot'>•</span>
<span className='privacy'>
Sitemap</span>
</div>
    </div>
    </div>
    </>
  )
}

export default Footer
