import React from 'react';
import './counter.css'


class Counter extends React.Component{

  constructor(){
    super();
    this.state={
      count:0
    }

    
  }

  Increment(){
    this.setState({
      count:this.state.count+1
    },
    ()=>{
      console.log(this.state.count)
    })
  }

  Decrement(){
    this.setState({
      count:this.state.count-1
    })
   
  }


  render(){
    return(
      <>
        <div className="container">
          <center>
            <h1>Interactive Counter</h1>
            <h2>Count : {this.state.count}</h2>
            <br />
            <br />
            <br />

            <div className="btn_container">
            <button id="btn1" onClick={this.Increment.bind(this)}>Increment</button>
            
            <button onClick={this.Decrement.bind(this)}>Decrement</button>
            </div>
       
          </center>
           
        </div>
      </>
    );
  }

}


export default Counter;