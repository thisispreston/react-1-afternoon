import React, { Component } from 'react'

export default class FilterObject extends Component {

  constructor () {
    super()

    this.state = {
      greekGods: [
        {
          name: "Zeus",
          gender: "male",
        },
        {
          gender: "male",
          power: "super strength"
        },
        {
          name: "Athena",
          power: "super intelligence"
        }
      ],
      userInput: '',
      filteredGreekGods: []
    }
  }

  handleChange (val) {
    this.setState({userInput: val})
  }

  filterGreekGods (property) {
    let greekGods = this.state.greekGods
    let filteredGreekGods = []

    for (let i = 0; i < greekGods.length; i++) {
      if (greekGods[i].hasOwnProperty(property)) {
        filteredGreekGods.push(greekGods[i])
      }
    }
    this.setState({filteredGreekGods: filteredGreekGods})
  }

  render () {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
    <span className="puzzleText"> Original: { JSON.stringify(this.state.greekGods)}</span>
        <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterGreekGods(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredGreekGods)} </span>
      </div>
    )
  }
}