import React, { useState , useRef} from "react";
import emailjs from 'emailjs-com';
import '../css/contaceMe.css'
// import { FcPhone } from "react-icons/fc";
// import { FcHome } from "react-icons/fc";
// import { FcFeedback } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
// import { FcUpload } from "react-icons/fc";

// const Result = ()=>{
//   return(
//     <p>Your message has been successfuly <FcOk/></p>
//   )
// }

// const ContacMe = () => {
// /////////////////////////////////////// send email
// const form = useRef();
// const [result , showResult] = useState(false)
// const sendEmail = (e) => {
//   e.preventDefault();

//   emailjs.sendForm('Gmail123amit', 'template_dph05n3', form.current, 
//   'user_zQXamzRRd3VgShqvnB0KG')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     e.target.reset()
//     showResult(true)
// };

//   //////////////////////////////////// send email
//   return (
//     <div>
//     <div className="contact_info">
//     <div className="row1">
//     <FcPhone/>
//       <p className="titleDeatils">Phone</p>
//       <p className="detailsInfo">+972523157737</p>
//     </div>
//     <div className="row1">
//     <FcFeedback/>
//        <p className="titleDeatils">Email</p>
//       <p className="detailsInfo">AmitAsher4@Gmail.com</p>
//     </div>
//     <div className="row1">
//     <FcHome/>
//     <p className="titleDeatils">Address</p>
//       <p className="detailsInfo">Bar Ilan 2, Herzliya</p>
//     </div>

//     </div>
    
//     {/* ////////////////////////////////////// form */}
//       <form ref={form}   onSubmit={sendEmail}>
//       <div className="formWord">
//       <h2 className="titleMessage">Hire me</h2>
//       {/* <span>Full Name</span> */}
//       <br/>
//       <input placeholder="your Full Name" className="input100" type="text" name="fullName" required/>
//       <br/>
//       {/* <span>Phone Number</span> */}
//       <br/>
//       <input placeholder="your Number Phone" className="input100" type="text" name="phone" required/>
//       <br/>
//       {/* <span>Enter Email</span> */}
//       <br/>
//       <input placeholder="your Email" className="input100" type="text" name="email" required/>
//       <br/>
//       <div className="formWord1">
//       {/* <span>Message</span> */}
//       <br/>
//       <textarea placeholder="Write Me whatever you want" name="message" className="inputTextArea" required></textarea>
//       <br/>
//       <div className="divBtnSubmit"> 
//       <button className="btnSubmit"><FcUpload/>  Send </button>
//       </div>
     
//       <div className="row">
//           {result ? <Result/> : null}
//       </div>
//       </div>
//       </div>

//       </form>
//     </div>
//     );
// }
const Result = ()=>{
  return(
    <p>Your message has been successfuly <FcOk/></p>
  )
}

const ContacMe = () =>{

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




  return(
    <>
      <form ref={form}   onSubmit={sendEmail}>
      <div className="container">
      <div className="contact-box">
      <div className="left"></div>
      <div className="right">
        <h2 className='titleHireMe'>Hire me</h2>
       <input name="fullName" type="text" className="field" placeholder="your Full Name"  required />
       <input name="email" type="email" className="field" placeholder="your Email" required/>
       <input name="phone"  type="text" className="field" placeholder="your phone" required/>
      <textarea name="message" className="field area" placeholder="message" required></textarea>
      <button className='btn'>Send</button>
      <div className="row">
          {result ? <Result/> : null}
       </div>
      </div>

      

      </div>

      </div>
      </form>
    </>
  )
}
 
export default ContacMe;