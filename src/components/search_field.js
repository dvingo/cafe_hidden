import React from 'react'
import OptionTemplate from './option_template'
import Typeahead from 'react-typeahead-component'
import state from '../state'
const allOptions = require('json!../../subway_station_data.json')

export default React.createClass({

  getInitialState() {
    return {
      inputValue: '',
      options: [],
      currentOption: null
    }
  },

  handleChange(e) {
    var inputVal = e.target.value
    if (inputVal.trim().length === 0) {
      this.setState({inputValue: inputVal, options: []})
      return
    }
    // TODO clean inputVal, toLowerCase, and allow only a-z, remove toLowerCase
    // from below
    var re = new RegExp(`^${inputVal.trim()}`)
    var newOptions = allOptions.filter(o => re.test(o.stationName.toLowerCase()))
    this.setState({inputValue: inputVal, options: newOptions})
  },

  handleOptionClick(e, data) {
    this.flyToLatLong(data.latitude, data.longitude)
  },

  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.currentOption) {
      let {latitude, longitude} = this.state.currentOption
      this.flyToLatLong(latitude, longitude)
    }
  },

  handleOptionChange(e, data, index) {
    this.setState({currentOption: data})
  },

  flyToLatLong(lat, long) {
    state.map.flyTo({
      center: [long, lat],
      zoom: 14.5
    })

  },

  render() {
    return (
      <Typeahead
        placeholder="Subway..."
        optionTemplate={OptionTemplate}
        options={this.state.options}
        onChange={this.handleChange}
        onOptionClick={this.handleOptionClick}
        onKeyPress={this.handleKeyPress}
        onOptionChange={this.handleOptionChange}
        inputValue={this.state.inputValue}
      />
    )
  }
})
