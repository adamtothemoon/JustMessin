import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {createStore} from 'redux'

const initialState = { // state state of application
  count: 0,
  isSpinning: false
}

const reducer = (state = initialState, action) => {	// redux calls this when we start the app
  console.log('reducer running', action)
  switch (action.type) {
  	case 'INCREMENT':
  		return Object.assign({}, state, {count: state.count += action.payload})
  	case 'DECREMENT':
  		return Object.assign({}, state, {count: state.count -= action.payload})
  	case 'SPIN':
  		return Object.assign({}, state, {isSpinning: state.isSpinning = true})
  	case 'STOPSPIN':
  		return Object.assign({}, state, {isSpinning: state.isSpinning = false})
  }
  return state
}

const store = createStore(reducer)

export default store

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
