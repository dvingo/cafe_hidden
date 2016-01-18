import React from 'react'
import OptionTemplate from './option_template'
import Typeahead from 'react-typeahead-component'
const allOptions = [{name:'one'}, {name:'two'}, {name:'three'}]
export default React.createClass({

  getInitialState() {
    return {
      inputValue: '',
      options: allOptions
    }
  },

  handleChange(e) {
    var inputVal = e.target.value
    var re = new RegExp(`^${inputVal.trim()}`)
    var newOptions = allOptions.filter(o => re.test(o.name))
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
