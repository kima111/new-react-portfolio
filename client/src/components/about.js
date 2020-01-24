import React, { Component } from 'react'
import "./index.scss";
import mongoPic from "../images/mongo.svg";
import ciscoPic from "../images/cisco.png";




const styles = {
    center: {

        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "5px",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.7)",
        overflow:"scroll",
        overflowX:"hidden",
        height:"70vh"
    },
    fontSize: {
        fontSize: "0.9rem",
        marginTop: "15px"
    },
    imageSize:{
        float: "left",
        width: "120px",
        marginTop: "15px",
        borderRadius: "5px"
    },
    iconSize:{
        width: "18px"
    },
    ciscoIconSize:{
        width: "28px"
    },
    reactColor:{
        color: "#00d8ff"
    },
    jsColor:{
        color: "#f0db4f"
    },
    nodeColor:{
        color: "#215732"
    },
    adobeColor:{
        color: "#ff0000"
    },
    html5Color:{
        color: "#e34f26"
    },
    cssColor:{
        color: "#4682B4"
    }
    
}
export default class About extends Component {


    render() {
        return (

            <div>

                <div className="container fadeUp" style={styles.center}>
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                    <img style={styles.imageSize} alt="profile pic" className="imageSize"src="/images/profile.png" />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tech I ❤️</p>
                    <hr />
                    <i style={styles.reactColor} class="fab fa-react"></i>&nbsp;&nbsp;&nbsp;<i style={styles.jsColor}class="fab fa-js"></i>&nbsp;&nbsp;&nbsp;<i style={styles.html5Color} class="fab fa-html5"></i>&nbsp;&nbsp;&nbsp;<i style={styles.cssColor}class="fab fa-css3-alt"></i>&nbsp;&nbsp;&nbsp;<i style={styles.nodeColor} class="fab fa-node"></i>&nbsp;&nbsp;&nbsp;
                    <br /><i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;<i style={styles.adobeColor} class="fab fa-adobe"></i>&nbsp;&nbsp;&nbsp;<img alt="mongo icon" style={styles.iconSize} src={mongoPic}/>&nbsp;&nbsp;&nbsp;<img alt="mongo icon" style={styles.ciscoIconSize} src={ciscoPic}/>
                    <br /><br /><br />
                    <p>Links to my</p>
                 
                    <a href="https://github.com/kima111">GITHUB</a>
                    <br />
                    <a href="https://www.linkedin.com/in/abraham-kim-481a0961/">LINKEDIN</a>
                    </div>
                    
                    <div className="col-lg-10 col-md-9 col-sm-12 col-xs-12">
                    <p style={styles.fontSize}>
                        A Full Stack Web Developer with an accomplished history of working in the Technical, Aerospace and Engineering industry. Skilled in Business Process Improvement, and Complex Digital Technologies. Graduated with a Bachelor of Science (BS) focused in Material Science and Engineering from the University of Washington. <br /><br />
                        <h4>Experience</h4>Currently leads the Digital Communication function for a company that revenues 3 billion plus dollars, has more than 10,000 employees, and over 40 locations corporately. Is responsible for implementing strategies that help transform and shape the company’s digital presence, while utilizing the efficacy of visual representation as well as proven strategies to portray and help narrate messages across the company's businesses. Also providing the company valuable metrics in establishing effective methods of communication to internal and external stakeholders by combining over 10 years of experience with engineering, industry, and technology that help usher in advances within the digital communications field.
                        <br /><br />
                        <h5>I.T. Manager</h5>
                        Managed, maintained, and deployed business critical systems. Setup infrastructure, and budgeted all projects. Initialized corporate system deployments, and helped with various programs.
                        <br /><br />
                        <h5>Project Manager</h5>
                        Managed projects, test parameters, and schedules within tight budget/time constraints. Adhered to test methods in accordance to ASTM, MIL, Boeing, LMA, and various testing standards.
                        <br /><br />
                        <h5>Research Technician</h5>
                        Developed, and performed Magnetic Resonance Imaging testing to research the affects of nano-particles via in-vivo/in-vitro studies.
                        <br/><br/>
                        <h5>Education</h5>
                        University of Washington Bachelor of Science, Material Science and Engineering
                        <br/><br/>
                        <h5>Certifications</h5>
                        <ul>
                            <li>Full Stack Web Development, University of Washington</li>
                            <li>Microsoft Certified Information Technology Professional, Microsoft</li> 
                            <li>Cisco Certified Network Professional, Cisco</li>
                        </ul>
                        </p>
                    </div>
                </div>
                    
                </div>

            </div>

        )
    }
}