
import './App.css';
import React,{Component} from "react"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import b1 from "./pics/b1.png";
import b2 from "./pics/b2.jpg";
import b3 from "./pics/b3.JPG";
import t1 from "./pics/t1.jpg";
import t2 from "./pics/t2.jpeg";
import t3 from "./pics/t3.jpeg";
import b4 from "./pics/b4.png";
import main from "./pics/main.png"

class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
  return (
    <div className="App">
    <div>
      <ul>
        <li style={{float:"left",fontSize:"40px"}}>
          LeaderClasses
        </li>
        <li style={{float:"right"}}>
          SignUp
        </li>
        <li style={{float:"right"}}>
          Career
        </li>
        <li style={{float:"right"}}>
          About
        </li>
        <li style={{float:"right"}}>
          Programs
        </li>
      </ul>
    </div>
    <div className="container-fluid position-relative box2">
        <div className="typewriter" style={{position: "absolute",margin: "30px",marginTop:"10%"}}>
        <h1 style={{fontSize:"50px"}}>LeaderClasses<br/> <span style={{fontSize:"30px",background:"rgba(255,255,255,0.5)"}}>Free Online Career Excellence Leadership Program.
        </span><br/><span className="signup"> SignUp</span> </h1>
        </div>
        <img src={b4} alt="leader image" style={{width:"100%",height:"500px"}}/>  
    </div>
    <div className="container-fluid position-relative">
        <img src={main} className="com"/>
    </div>
    <div className="container-fluid position-relative box">
          <h1 className="heading">LeaderClasses</h1>
          <p> Harnesses the world's best Career Advancement Leadership Development resources, helping  
          you gain Expert Knowledge, Practical Guidance Actionable Insights from Extraordinary Leaders World 
          Class Institutions through Specialized, Affordable, Online Offline Programs custom crafted to Accelerate  
           your Career Business Success while transforming you into a better more effective Leader.</p>
    </div>
    <div className="container-fluid position-relative" style={{height:"300px"}}>
          <h1 className="heading">Facilitating LeaderClasses with </h1>
          <div style={{display:"flex",}}>
          <div className="gallery">
          <h1>Learn From</h1>
          <img src={b1} alt="Learn From" style={{width:"100%"}}/>
          </div>
          <div className="gallery">
          <h1>Guidance From</h1>
          <img src={b2} alt="Guidance From" style={{width:"100%"}}/>
          </div>
          <div className="gallery">
          <h1>Inspire From</h1>
          <img src={b3} alt="Inspire From" style={{width:"100%"}}/>
          </div>
          </div>
    </div>
    <div className="container-fluid position-relative box" style={{marginTop:"100px",height:"400px"}}>
          <h1 className="heading">Testimonals</h1>     
    <div className="container-fluid position-relative" style={{height:"300px"}}>
          <div style={{display:"flex",}}>
          <div className="testimonials">
          <img src={t1} alt="Ram Gopal" className="testimonial"/>
          <h2>Ram Gopal</h2>
          <h3>CEO,Berclay India</h3>
          <p> It is a fascinating concept helping tech lead of tomorrow to grow big.</p>
          </div>
          <div className="testimonials">
          <img src={t2} alt="Gunjan Srivastav" className="testimonial"/>
          <h2>Gunjan Srivastav</h2>
          <h3>Chairman, Bosch Siemens</h3>
          <p> It is a fascinating concept helping tech lead of tomorrow to grow big.</p>
          </div>
          <div className="testimonials">
          <img src={t3} alt="Achint Setia" className="testimonial"/>
          <h2>Achint Setia</h2>
          <h3>VP, Marketing Myntra</h3>
          <p> It is a fascinating concept helping tech lead of tomorrow to grow big.</p>
          </div>
          </div>
    </div>
    </div>
    <div className="container-fluid position-relative box2" style={{height:"200px"}}>
          <h1 className="heading">Campus Partner</h1>
          <p>LeaderClasses is at a very interesting phase of its growth is actively looking to expand our Campus Partnerships Pan-India.
          If you are an Institutional Representative of a University / College interested in building a relationship with us , we invite you to contact us.</p>
    </div>
  <div className="container-fluid position-relative box" style={{height:"400px"}}>
          <h1 className="heading" style={{paddingTop:'50px'}}>Learning, Leveling and Living.</h1>
          <p style={{fontSize:'30px',marginTop:'50px'}}>Connnect Us</p>
          <div>
          <a href="https://www.linkedin.com/in/iamshanku/"><i className="fa fa-linkedin-square connect"></i></a>
          <a href="https://github.com/shanku01"><i className="fa fa-github connect"></i></a>
          <a href="mailto:shashankpradhan911@gmail.com"><i className="fa fa-envelope-o connect"></i></a>
          </div>
          <p style={{marginTop:'50px'}}>All Rigths are Reserved <i className="fa fa-copyright" aria-hidden="true"></i> Shashank</p>

    </div>
</div>  
  );
}
}

export default App;
