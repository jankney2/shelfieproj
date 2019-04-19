import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [], 
      editStatus: false
    }
  }




  
  componentDidMount() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data
      })
    })
  }



  render() {
    return (
      <div className="App">


        <Header />

        <div className="itemContainer">
          <Dashboard productList={this.state.inventory} />

          < Form /></div>



      </div>
    );
  }
}

export default App;
