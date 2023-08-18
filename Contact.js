import React from 'react'
import cpic from './cpic.jpg'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

//............   nested routes.. import outlet...............

const Contact = () => {
  return (
    <div>

      <div className='contactmain'>

      <div>
      <img src={cpic} alt="cpic" className='contactpic'/> 
      </div>
      
      <div>
      <h1 className='headingc1'>Contact with us</h1>
      <p className='parac1'>We are dedicated to providing exceptional customer service solutions<br></br>for businesses of all sizes. Our team of highly trained <br></br>professionals is committed to ensuring that your customers receive the<br></br> best  possible experience when interacting with your company.</p>
      </div>

      </div>


      <div className='contactbody'>

        <div className='contacticons'>
       <PhoneInTalkIcon sx={{fontSize:70}}></PhoneInTalkIcon>
       <EmailIcon  sx={{fontSize:70}}></EmailIcon>
       <HomeIcon  sx={{fontSize:70}}></HomeIcon>
        </div>

        <div className='contactinfo'>
       <h2>0333452444566</h2>
       <h2>goals@gmail.com</h2>
       <h2>Commercial Market Rawalpindi</h2>
        </div>

      </div>
    

      <div className='contactform'>

      <form>
    <h1>Contact Us now!</h1>
    <input type="text" pattern="[A-Za-z]{3,15}" minlength="3" maxlength="15" placeholder="Your Name" required/>
    <br></br><br></br>
    <input type="email" minlength="5" maxlength="50" placeholder="Your Email" required/>
    <br></br><br></br>
    <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
    <br></br><br></br>
    <button type="submit" className='submitbtn'>Submit</button>
</form>


    </div>

    </div>

  )
}

export default Contact
