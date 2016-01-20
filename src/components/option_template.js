import React from 'react'

export default React.createClass({
  render() {
    var bgColor = (this.props.isSelected ? 'green' : null)
    var style = {
      backgroundColor: bgColor,
      padding: '0.2em'
    }
    return (
      <div style={style}>
        <p>{this.props.data.stationName}</p>
      </div>
    )
  }
})
