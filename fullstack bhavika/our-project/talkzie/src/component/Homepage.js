import React, { Component } from 'react';
//import {Switch, Redirect } from 'react-router-dom';
//import Login from "./loginpage";
//import Signup from './signuppage';
import  './home.css'
 class Homepage extends Component {
     state = { 
         
      }
     render() { 
         return ( 
             <div className="body">
            
               <h className="homepg">Talkzie</h>
               <br/>
               <button className="btn">Login</button>
                <button className="btn" >
                   signup
                    </button>
               
               </div>

             
             
       
          );
     }
 }
  
 export default Homepage;