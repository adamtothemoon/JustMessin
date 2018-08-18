import {createStore} from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>How Hard Do You Wana Spin??</h1>
        <p>POWER: {this.props.count}</p>
        <button type='button' onClick={this.props.onIncrementClick}>Increment</button>
        <button onClick={this.props.onDecrementClick}>Decrement</button>
      </div>
    )
  }
}

function mapStateToProps (state) { // glue between dumb component and the container (making it a smart component and able to access the store)
  	console.log('mapStateToProps', state) // must match the parts of the state that you want to pass to the component
  	return {
    	count: state.count // PROP ON LEFT, STATE ON RIGHT
  }
}

function mapDispatchToProps (dispatch) { // allows for methods that can dispatch actions to the reducer
  return {
    onIncrementClick: () => {
      const incAction = {
        type: 'INCREMENT',
        payload: 1
      }
      dispatch(incAction)
    },
    onDecrementClick: () => {
      const decAction = {
        type: 'DECREMENT',
        payload: 1
      }
      dispatch(decAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) // puts the wrapper (or container) on the componnent
