import { FiGithub } from "react-icons/fi"
import { FaFacebookF } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs";
 import amit from ".././images/amit.jpeg"
import '../App.css';



const SectionOne = () => {
  return ( 
  <div className="backGround">
    <div className="positionDivOne">
     <div className='Links'>
         <ul>
           <li onClick={()=>{window.open('https://github.com/amitAsher22')}}><FiGithub/></li>
           <li  onClick={()=>{window.open('https://www.facebook.com/amitasherWebDeveloper')}}><FaFacebookF/></li>
           <li onClick={()=>{window.open('https://api.whatsapp.com/send?phone=972523157737&text=Talk%20With%20Me%20:)')}}><BsWhatsapp/></li>
         </ul>
     </div>
     <div className='Categories'>
        <ul>
           <li className="textNav"><a href="#aboutMe">About Me</a></li>
           <li className="textNav"><a href="#myProjects">MyProjects</a></li>
          <li className="textNav"><a href="#MyExperience">MyExperience</a> </li>
        <li className="textNav"> <a href="#ContactMe">Contact Me</a></li>
         </ul>
     </div>
     
    </div>
    <div className="mainSectionOne">
    <div>
      <h1 className="titleName">Amit Asher</h1>
      <hr/>
      <p className="titleWeb">web developer</p>
      <p className="title2Web">Full Stack</p>
    </div>
    <img src={amit} alt="imgProfile" className="avatar"/>
    </div>
  </div> 
  );
}
 
export default SectionOne;