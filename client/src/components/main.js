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
        margin: "0.25em",
        display: "inline-block"
    },
    colorWhite:{
        color: "white"
    },
    navBarAdjust:{
        marginLeft: "-2em"
    }
};

function MainPage() {
    return (
        <div style={styles.background}>
           
        
          
            <div className="container">
        
            <Router>
                <Link to="/" style={styles.heading}><h1 style={styles.h1}className="display-4 fadeUp">Abraham Kim</h1></Link>
                <p style={styles.tagline} className="lead fadeUp">A Full Stack Web Developer!</p>
                    <nav className="navbar" style={styles.navBarAdjust}>
                            <ul className="navbar">
                                <li className="nav-item d-inline" style={styles.button}>
                                    <Link to="/about"><button type="button" className="btn btn-outline-light btn-sm fadeUp">About Me</button></Link>
                                </li>
                          
                                <li className="nav-item" style={styles.button}>
                                    <Link to="/portfolio"><button type="button" className="btn btn-outline-light btn-sm fadeUp">Portfolio</button></Link>
                                </li>
                           
                                {/* <li className="nav-item" style={styles.button}>
                                    <Link to="/contact"><button type="button" className="btn btn-outline-light btn-sm fadeUp">Contact</button></Link>
                                </li> */}
                            </ul>
                    </nav>
                <Switch>
                {/* <Route exact path="/" component={this}/> */}
                <Redirect exact from="/" to="/about" />
                <Route exact path="/about" component={About}/>
                <Route exact path="/portfolio" component={Portfolio}/>
       
                {/* <Route exact path="/contact" component={Contact}/>
                <Route exact path="/thankyou" component={ThankYou}/> */}
                <Route component={NoMatch} />
                </Switch>
            </Router>
            
            </div>
        </div>
    )
}

export default MainPage;