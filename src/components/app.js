import React from 'react'
import Map from './map'
import SearchField from './search_field'
export default React.createClass({
  render() {
    return (
      <div style={{height: '100%'}}>
        <p>we are here</p>
        <SearchField/>
        <Map/>
      </div>
    )
  }
})
