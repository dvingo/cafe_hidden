import React from 'react'
import OptionTemplate from './option_template'
import Typeahead from 'react-typeahead-component'
const allOptions = require('json!../../subway_station_data.json')

export default React.createClass({

  getInitialState() {
    return {
      inputValue: '',
      options: []
    }
  },

  handleChange(e) {
    var inputVal = e.target.value
    if (inputVal.trim().length === 0) {
      this.setState({inputValue: inputVal, options: []})
      return
    }
    var re = new RegExp(`^${inputVal.trim()}`)
    var newOptions = allOptions.filter(o => re.test(o.stationName.toLowerCase()))
    this.setState({inputValue: inputVal, options: newOptions})
  },

  render() {
    return (
      <Typeahead
        placeholder="Subway..."
        optionTemplate={OptionTemplate}
        options={this.state.options}
        onChange={this.handleChange}
        inputValue={this.state.inputValue}
      />
    )
  }
})
