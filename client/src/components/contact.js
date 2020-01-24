import React, { Component } from 'react'
import "./index.scss";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

const styles = {
    center: {

        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "5px",
        opacity: "1",
        color: "white",
        backgroundColor: "rgba(0,0,0,.7)",
        height: "70vh",

    },
    fontSize: {
        fontSize: "0.9rem",
        marginTop: "15px"
    },
    formInputs:{
        backgroundColor: "rgba(0,0,0,0)",
        color: "white",
        marginTop: "5px",
        marginRight: "5px"
    }
}
class contact extends Component {
    // Setting the component's initial state
    constructor(){
      super()

      this.state = {
        name: "",
        email: "",
        message:""   
      };

      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      }
      handleInputChange = event => {
   
        let value = event.target.value;
        const name = event.target.name;
    
   
        this.setState({
          [name]: value
        });
      };

  
  

  
     handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.name) {
        alert("Fill out your name please!");
      } 
      const{name, email, message}= this.state;
      axios.post('api/form', {
        name,
        email,
        message
      })
      .then((response) => {
        console.log(response)
      }, (error) =>{
        console.log(error)
      })
      this.props.history.push('/thankyou')
   
    };
  
    render(){
     
    return (
        <div>
            <div className="container fadeUp" style={styles.center}>
                <br />
                <form onSubmit={this.handleFormSubmit}className="form-group" action="/">
                <label htmlFor="NameInput">Name</label>
                    <br /><input
                        value={this.state.firstName}
                        name="name"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Name"
                        style={styles.formInputs}
                        id="NameInput"
                    />
                <br /><br />
                <div className="form-group">
                <label htmlFor="EmailInput">Email address</label>
                    <input 
                        type="email"
                        name="email"
                        onChange={this.handleInputChange} 
                        className="form-control" 
                        id="EmailInput" 
                        placeholder="name@example.com" 
                        style={styles.formInputs}/>
                  </div>
                  <div className="form-group">
                  <label htmlFor="MessageInput">Message</label>
                  <textarea 
                        className="form-control"
                        name="message" 
                        id="MessageInput"
                        onChange={this.handleInputChange} 
                        rows="3" 
                        style={styles.formInputs}>
                    </textarea>
                    </div>
                    <button className="btn btn-outline-light">Submit</button>
                </form>

              </div>
          </div>
    )
    }
}
export default contact;