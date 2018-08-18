import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'
import Wheel from './Wheel'
import store from './index.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Wheel Spinner!</h1>
        </header>
        <Counter store={store} />
        <Wheel store={store} />
      </div>
    )
  }
}

export default App
