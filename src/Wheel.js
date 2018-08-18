import {createStore} from 'redux'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import wheel from './wheel.jpg'
class Wheel extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    ifSpinning(this.props)
    return (
      <div>
        <div>
          <img ref='wheelImg' class='wheel' src={wheel} />
        </div>
        <div>
          <button onClick={this.props.onSpin}>spin</button>
        </div>
      </div>
    )
  }
}

function ifSpinning (props) {
  if (props.isSpinning) {
  	wheelImg.rotate(90)
    console.log('SPINNING WHEEL')

    props.stopSpin()
  } else {
  }
  // wheel.rotate(Math.floor(Math.random()))
}

function mapStateToProps (state) {
  return {
    count: state.count,
    isSpinning: state.isSpinning
  }
}

function mapDispatchToProps (dispatch) { // dispatch methods now accessable by props as seen above (left side is props just like the map state to props function)
  return {
    onSpin: () => {
      const spinAction = {
        type: 'SPIN'
      }
      console.log('dispatching spin')
      dispatch(spinAction)
    },
    stopSpin: () => {
      const stopSpinAction = {
        type: 'STOPSPIN'
      }
      console.log('Stopping Spin')
      dispatch(stopSpinAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wheel)
