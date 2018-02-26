import React, { Component } from 'react';
import logo from './emoji.png';
import './App.css';
import Chat from "./Chat.js";
import Sticker from "./Sticker.js";

class Landing extends Component {
    constructor(props){
        super(props);
        this.state={
            clicked:false,
            stickerclicked:false
        };
    
        this.changePages= this.changePages.bind(this);
        this.showchat = this.showchat.bind(this);
        this.showsticker = this.showsticker.bind(this);
    }

    
    changePages(){
        var page = "Chat";
       this.props.changepage(page);
    }
    sticker(){
        var page = "Sticker";
       this.props.changepage(page);
    }
    showchat(){
        this.setState({
            clicked:!this.state.clicked
        });
    }
    
    showsticker(){
        this.setState({
            stickerclicked:!this.state.stickerclicked
        });
    }
    
  render() {
      
    return (
        
      <div className="App">
    
        <img src={logo} className="App-logo" alt="logo" />
    
        
        <div className="App-intro">
        
        
        <p>About Siqi</p>
        
        
        <p>
       Siqi Li first chose Software Engineering in her undergraduate study in China. Being enrolled in the Digital Design and Development program at BCIT, she learn 3 major departments of the tech industry:Web Development, Design and Marketing.   

        </p>
         <p className="bio">Siqi likes to cook & watch TV :P</p>
        
        </div>
        
        
        <div className="App-intro2">
        
        
        <p>About Falicia</p>
        <p>
    After graduating from Digital Media program in Taiwan, Falicia joined Tai Yar Fashion International as a junior graphic designer. Then, she attended Digital Design and Development at BCIT in 2016. 
 </p>
        <p className="bio">Falicia can't live without coffee :(</p>

        </div>
       <div>
        {this.state.clicked ?
        
        <Chat 
        closePopup={this.showchat.bind(this)}
    />
    :null
        
        <div>
        {this.state.stickerclicked ?
        
        <Sticker
        closePopup={this.showsticker.bind(this)}
    />
    :null
    
}
          <button className="but1" onClick = {this.showchat.bind(this)}>Chat Now</button>
          <button className="but2" onClick = {this.showsticker.bind(this)}>Sticker Page</button>
        </div>
        </div>
      </div>
    );
  }
}

export default Landing;
