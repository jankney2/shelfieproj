import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Form from './components/Form'
import Header from './components/Header'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
      editStatus: false
    }
  }

  toggleStatus = () => {
    this.setState({
      editStatus: !this.state.editStatus
    })
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
        <Switch>
          <Route exact path='/' component={() => {
            return (
              <div>
                <Header />
                <Dashboard productList={this.state.inventory}
                  toggleStatus={this.toggleStatus}
                />

              </div>
            )
          }} />


          <Route path='/form' component={() => {
            return (
              <div>
              <Header />
              
              < Form editStatus={this.state.editStatus} />
              </div>)
          }} />

          <Route path="/edit" component={()=> {
            //use axios get to pull data? 
          return <Form />              

          }} />


        </Switch>

{/* 
        <Header />

        <div className="itemContainer">
          <Dashboard productList={this.state.inventory}
            toggleStatus={this.toggleStatus}
          />

          < Form editStatus={this.state.editStatus} />
        </div> */}



      </div>
    );
  }
}

export default App;
