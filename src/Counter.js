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
            <button onClick={this.Increment.bind(this)}>Increment</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.Decrement.bind(this)}>Decrement</button>
          </center>
           
        </div>
      </>
    );
  }

}


export default Counter;