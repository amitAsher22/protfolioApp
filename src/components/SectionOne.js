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
           <li className="textNav"><a href="#about">About Me</a></li>
           <li className="textNav"><a href="#about">MyProjects</a></li>
           <li className="textNav"><a href="#about">MyExperience</a></li>
           <li className="textNav"><a href="#about">Contact Me</a></li>
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
    <img src={amit} className="avatar"/>
    </div>
  </div> 
  );
}
 
export default SectionOne;