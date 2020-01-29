import React, { Component } from 'react'

export default class FilterString extends Component {

  constructor () {
    super()

    this.state = {
      commands: ['Be silent!', 'Come here.', 'Be gone!', 'Off with his head!', "Fetch my slippers."],
      userInput: '',
      filteredCommands: []
    }
  }

  handleChange (val) {
    this.setState({userInput: val})
  }

  filterCommands (userInput) {
    let commands = this.state.commands
    let filteredCommands = []

    for (let i = 0; i < commands.length; i++) {
      if (commands[i].includes(userInput)) {
        filteredCommands.push(commands[i])
      }
    }
    this.setState({filteredCommands: filteredCommands})
  }

  render () {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Commands: {JSON.stringify(this.state.commands)}</span>
        <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterCommands(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Commands: {JSON.stringify(this.state.filteredCommands)} </span>
      </div>
    )
  }
}