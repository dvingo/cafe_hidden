import React from 'react'
var mapStyle = 'mapbox://styles/dvingo/cij4dtf6p001j8rm7bhiobb0e'
mapboxgl.accessToken = 'pk.eyJ1IjoiZHZpbmdvIiwiYSI6ImNpZWhhMTRraTAwOXhzNm0zdnpodXV3dDMifQ.PY9OHTkivg2Xmqhd6gTNPQ'

export default React.createClass({

  componentDidMount() {
    var map = new mapboxgl.Map({
      container: 'map',
      style:  mapStyle,
      center: [-73.94, 40.73],
      zoom: 10
    })
  },

  render() {
    var containerStyles = {
      position: 'relative',
      height: '100%'
    }
    var styles = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    }
    return (
      <div style={containerStyles}>
        <div id="map" style={styles}/>
      </div>
    )
  }
})
