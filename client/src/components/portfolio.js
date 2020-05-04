import React, { Component } from 'react'
import "./index.scss";
import Projectcard from './projectCard';
import projects from "./projects.json";

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

        height:"70vh",
       
    },
    fontSize: {
        fontSize: "0.9rem",
        marginTop: "15px"
    }
}
const Portofolio = () =>{
  

 
        return (

            <div>
        
                <div className="container fadeUp" style={styles.center}>
                <div className="row">
                {projects.map(projects => (
                    <div className={projects.format}>
                    <Projectcard
                    image={projects.src}
                    title={projects.title}
                    description={projects.description}
                    projectURL={projects.projectURL}
                    githuborheroku={projects.githuborheroku}
                    />
                    </div>
                ))}
                </div>
                </div>
              
               
            </div>

        )
    }
export default Portofolio;