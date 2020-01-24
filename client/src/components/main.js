import React from "react";
import background from "../images/background.jpg";
import "./index.scss";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
  } from "react-router-dom";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import ThankYou from "./thankyou"
import NoMatch from "./nomatch";


const styles = {
    background: {
        backgroundImage: `url(${background})`,
        color: "white",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    heading:{
   
        color: "white",
        textDecoration: "none"
        
    },
    
    tagline:{
  
        marginLeft: "5px",
        marginTop: "-10px"
    },
    button:{
        marginLeft: "-8px"
     
    }, 
    button2:{
        marginLeft: "5px"
    },
    h1:{
        
    }
    


};

function MainPage() {
    return (
        <div style={styles.background}>
           
        
          
            <div className="container">
            <Router>
                <Link to="/" style={styles.heading}><h1 style={styles.h1}className="display-4 fadeUp">Abraham Kim</h1></Link>
                <p style={styles.tagline} className="lead fadeUp">A Full Stack Web Developer!</p>
                    <nav className="navbar navbar-expand-lg navbar-outline">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" style={styles.button}>
                                    <Link to="/about"><button style={styles.button} type="button" className="btn btn-outline-light fadeUpButton">About Me</button></Link>
                                </li>
                                <li className="nav-item" style={styles.button2}>
                                    <Link to="/portfolio"><button style={styles.button2} type="button" className="btn btn-outline-light fadeUpButton">Portfolio</button></Link>
                                </li>
                                <li className="nav-item" style={styles.button2}>
                                    <Link to="/contact"><button style={styles.button2} type="button" className="btn btn-outline-light fadeUpButton">Contact</button></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                <Switch>
                <Route exact path="/" component={this}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/thankyou" component={ThankYou}/>
                <Route component={NoMatch} />
                </Switch>
            </Router>
            </div>
        </div>
    )
}

export default MainPage;