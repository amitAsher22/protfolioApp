import React, { useState , useRef} from "react";
import emailjs from 'emailjs-com';
import '../css/contaceMe.css'
import { FcPhone } from "react-icons/fc";
import { MdAttachEmail } from "react-icons/md";
import { FcHome } from "react-icons/fc";

const Result = ()=>{
  return(
    <p>Your message has been successfuly</p>
  )
}

const ContacMe = () => {
/////////////////////////////////////// send email
const form = useRef();
const [result , showResult] = useState(false)
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('Gmail123amit', 'template_dph05n3', form.current, 
  'user_zQXamzRRd3VgShqvnB0KG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    showResult(true)
};

  //////////////////////////////////// send email
  return (
    <div>
    <div className="contact_info">
    <div className="row1">
    <FcPhone/>
      <p>Phone</p>
      <p>+972523157737</p>
    </div>
    <div className="row1">
    <MdAttachEmail/>
       <p>Email</p>
      <p>amitasher4@gmail.com</p>
    </div>
    <div className="row1">
    <FcHome/>
    <p>Address</p>
      <p>bar Ilan 2 , Herzeliya</p>
    </div>

    </div>
    
    {/* ////////////////////////////////////// form */}
      <form ref={form}   onSubmit={sendEmail}>
      <div className="formWord">
      <h2>Say Hello</h2>
      <span>Full Name</span>
      <br/>
      <input className="input100" type="text" name="fullName" required/>
      <br/>
      <span>Phone Number</span>
      <br/>
      <input className="input100" type="text" name="phone" required/>
      <br/>
      <span>Enter Email</span>
      <br/>
      <input className="input100" type="text" name="email" required/>
      <br/>
      <div className="formWord">
      <span>Message</span>
      <br/>
      <textarea name="message" required></textarea>
      <br/>
      <button>Submit</button>
      <div className="row">
          {result ? <Result/> : null}
      </div>
      </div>
      </div>

      </form>
    </div>
    );
}
 
export default ContacMe;