import React from 'react';
import "./index.scss";


const styles={

    transparentCard:{
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "white",

        margin: "15px",
        display: "inline-block"
    },
    cardMargin: {
        margin: "0px"
    }
        
}
function ProjectCard(props) {

        return (
        
              <div style={styles.cardMargin}>
                <div className="card" style={styles.transparentCard}>
                    {/* <img src={p1image} alt="placeholder" className="card-img-top" alt="..."/> */}
             
                    <img src={props.image} alt="placeholder" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <a href={props.projectURL} target="_blank" className="btn btn-outline-light">Take a look on {props.githuborheroku}</a>
                        </div>
                    </div>
              </div>
    
            )
            }
        
export default ProjectCard;