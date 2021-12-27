import '../css/myExperience.css'
import html from '../images/HTML.png'
import css from '../images/CSS.png'
import js from '../images/js.png'
import vue from '../images/vue.png'
import vuex from '../images/Vuex.jpg'
import react from '../images/react.png'
import node from '../images/node.png'
import express from '../images/express.png'
import cloudFunctions from '../images/cloudFunctions.png'
import serverless from '../images/serverless.jpg'
import Firebase from '../images/Firebase.png'
import postgresql from '../images/postgresql.jpg'
import git from '../images/git.jpg'
import BitBucket from '../images/BitBucket.jpg'

const MyExperience = () => {
  return ( 
    <div>
     {/* //////////////////////////////////// */}

     <div  className="Section4">
         <div>
             <h1 className="titleSection">MyExperience</h1>
         </div>
         <div  class="lineCenter1" >
            <hr/>
        </div>
        <div className="AllProjects">
            <div className="box FrontEnd">
                <h2>Front-end</h2>
                <div className="AllImages">
                    <img src={html} alt="html"/>
                    <img src={css} alt="css"/>
                    <img src={js} alt="js"/>
                    <img  src={vue} alt="vue"/>
                    <img src={vuex} alt="vuex"/>
                    <img src={react} alt="react"/>
                  
                </div>
            </div>
        
                <div className="box BackEnd">
                    <h2>back-End</h2>
                    <div>
                     <img src={node}  alt="node"/>
                     <img src={express}  alt="express"/>
                     <img src={cloudFunctions} alt="Cloud Functions"/>
                     <img src={serverless} alt="serverless"/>
                 </div>
                </div>
                <div className="box DataBase">
                    <h2>DataBase</h2>
                    <div>
                        <img src={Firebase}  alt="Firebase Realtime"/>
                        <img src={postgresql}  alt="postgresql"/>
                    </div>
                </div>
            
          
            <div className="box Other">
                <h2>Other</h2>
                <div>
                    <img src={git}  alt="git"/>                 
                    <img src={BitBucket} alt="BitBucket"/>
                </div>
            </div>
          </div> 


        </div>
     {/* //////////////////////////////////// */}
     
    </div>
   );
}
 
export default MyExperience;