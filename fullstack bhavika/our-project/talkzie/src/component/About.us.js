import React, { Component } from 'react';
import Inputs from './about.input';
import "./home.css"


class About extends Component {
    state = { 
        about:{name:"" , username:"", bio:"", website:"" },
        
     }
     render() {
        return (
          <React.Fragment>
            <div class="form">
              <form onSubmit={this.handleSubmit}>
              
              <Inputs 
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  value={this.state.about.name}
                  onChange={this.handleChange}
                />
                <Inputs 
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  value={this.state.about.username}
                  
                  onChange={this.handleChange}
                />
                <Inputs 
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  value={this.state.about.bio}
                  onChange={this.handleChange}
                />
                <Inputs 
                  id="website"
                  name="website"
                  label="Website"
                  type="website"
                  value={this.state.about.website}
                  onChange={this.handleChange}
                />
                

                
              </form>
              
            </div>
          </React.Fragment>
        );
      }
    }
    
    
export default About;