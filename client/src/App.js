import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: {},
  }
  getData = async () =>{
    let response = await fetch('http://localhost:3001')
    let data = await response.json()
    await this.setState({data})
  }
  async componentDidMount() {
    await this.getData()
    await console.log(this.state.data)
  }
  render() {
    let data = this.state.data
    return (
      <div className="App">
        <ul>
          <li>{data.Name }</li>
          <li>{data.Id}</li>
          <li>{data.Dept}</li>
        </ul>
      </div>
    );
  }
}
const Li  = props = {
  
}
export default App;
