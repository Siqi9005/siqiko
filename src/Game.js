import React, { Component } from 'react';
import './App.css';

import mySocket from "socket.io-client";


class Game extends Component {

    
     constructor(props){
        super(props);
        this.state = {
            mode:0,
            username:"", 
            img1:require("./img/mouse1.png"), 
            img2:require("./img/mouse2.png"), 
            userScore:0,
            ending:false,
            users:[],
        
        }
        
        
        this.joinGame = this.joinGame.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.randomMove = this.randomMove.bind(this);
        this.end = this.end.bind(this);
        this.handleImage2 = this.handleImage2.bind(this);
    }
          
    
    
 randomMove() {
       
  this.refs["random"].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    
   this.refs["random"].style.left = Math.floor(Math.random() * window.innerWidth) + "px";
         
   
}
    
    handleImage(){
    
       this.refs["random"].src = this.state.img2; 
        
       this.setState({
            userScore:this.state.userScore +1
        });
        
    }
    
    handleImage2(){
           
       this.refs["random"].src = this.state.img1;
        
        
    }
    
    handleUsername(evt){
        this.setState({
            username:evt.target.value
        })
    }
    
    
    joinGame(){
        this.setState({
            mode:1
        })
        this.socket = mySocket("https://git.heroku.com/gamesocke.git/");
    
        
        this.socket.emit("username", this.state.username);
        
        this.socket.on("usersjoined", (data)=>{
            console.log(data);
            this.setState({
                users:data
            })
            
             
            
        });
        
setInterval(this.randomMove,1200);
        
    }
    

     end(){
         
        this.setState({
            ending:true
        });
    }
    
  render() {
      
         var allUsers = this.state.users.map((obj,i)=>{
        return(
            <div key={i}>
                {obj}
            </div>
        
        )    
        });
      
      var comp = null;
         if(this.state.mode === 0){
            comp = (
            <div id="userTname">
                
                <input className="nameText" type = "text" placeholder = "Please type your name" onChange={this.handleUsername} />
                
                <button className="joinGame" onClick = {this.joinGame}>Start</button>
                
            </div>
        )}
      
      
      
      else if(this.state.mode === 1){
                
            comp = (
                <div id="div"></div>
                  <div id="background"> 

 
<img id="img" onselectstart="return false;" unselectable="on" style="-moz-user-select:none;" ondragstart="return false;"> 
     
</div> 
                    <div id="user">Name: {this.state.username}</div>
               
                         <p id="num" class="text">Score:{this.state.usersScore} 0</p>  

                            <img ref="random" className="image1" src={this.state.img1} onMouseDown= {this.handleImage} onMouseUp= {this.handleImage2} 
                
                height={150} />

        );   
            
            
        }
      return (
        <div>
        
        {comp}

        </div>
    );
  }
}

export default Game;
