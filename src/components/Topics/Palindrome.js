import React, { Component } from 'react'

export default class Palindrome extends Component {

  constructor () {
    super()

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  filterString (userInput) {
    let forwards = userInput
    let backwards = userInput

    backwards = backwards.split('')
    backwards = backwards.reverse()
    backwards = backwards.join('')

    if (forwards === backwards) {
      this.setState({palindrome: 'TRUE'})
    } else {
      this.setState({palindrome: 'FALSE'})
    }
  }

  handChange (val) {
    this.setState({userInput: val})
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={e => this.handChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}> Check </button>
    <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
      </div>
    )
  }
}