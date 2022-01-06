import "../css/myprojects.css"
// import googlemap from '../images/googlemap.png'


const MyProjects = () => {
  return (
    <div id="myProjects">
      <div className="section3">
        <h1 className="titleMyProjects">MyProjects</h1>
        <div className="lineCenter" >
          <hr />
        </div>
        <div >
          <div  className="grid-container">
            <div  className="item1" onClick={()=>{window.open('https://googlemapapp.netlify.app/')}}></div>
            <div  className="item2" onClick={()=>{window.open('https://menusite.netlify.app//')}}></div>
            <div  className="item3" onClick={()=>{window.open('https://landingpagevue.netlify.app/')}}></div>
            <div  className="item4" onClick={()=>{window.open('https://bookwebgoogle.netlify.app/')}}></div>
            <div  className="item5" onClick={()=>{window.open('https://priva-app.herokuapp.com/')}}></div>
          
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyProjects;