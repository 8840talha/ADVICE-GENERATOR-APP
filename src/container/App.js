import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import Card from '../components/Card/Card';
class App extends Component {
  
  state={
  advices:''  
  }
  
// componentDidMount(){
//   this.adviceHandler();
// }

adviceHandler=()=>{
  axios.get('https://api.adviceslip.com/advice').then(response=>{
  const fetchedadvice = response.data.slip.advice  
  this.setState({advices:fetchedadvice}); 
    
})
}
  
  render() {
    
      return (
        <div className="app">
                  
        <Card clickAdvices={this.adviceHandler} advice={this.state.advices}  />
        </div>
      );
    
    
  }
}

export default App;
