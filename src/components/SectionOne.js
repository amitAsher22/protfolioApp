import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { SiGmail } from "react-icons/si";
 import amit from ".././images/amit.jpeg"
import '../App.css';



const SectionOne = () => {
  return ( 
  <div className="backGround">
    <div className="positionDivOne">
     <div className='Links'>
         <ul>
           <li><AiOutlineInstagram/></li>
           <li><FaFacebookF/></li>
           <li><SiGmail/></li>
         </ul>
     </div>
     <div className='Categories'>
        <ul>
           <a href="#aboutMe"><li className="textNav">About Me</li></a>
           <a href="#myProjects"><li className="textNav">MyProjects</li></a>
          <a href="#MyExperience"><li className="textNav">MyExperience</li></a> 
          <a href="#ContactMe"><li className="textNav">Contact Me</li></a>
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