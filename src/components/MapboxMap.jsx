import React, { useState } from "react"
import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MapboxMap = () => {
  return (
    <>
      <iframe
        className="h-[400px] w-full"
        // src="https://labs.mapbox.com/contribute/#/details?owner=godaddy&id=ciovyeygh0029atm6zbntgxk2&access_token=pk.eyJ1IjoiZ29kYWRkeSIsImEiOiJjaWc5b20wcjcwczAydGFsdGxvamdvYnV0In0.JK9HuO6nAzc8BnMv6W7NBQ&utm_source=https%3A%2F%2Fyammbuffet.com%2F&utm_medium=attribution_link&utm_campaign=referrer&q=Priestpopple%2C+Hexham%2C+Northumberland%2C+NE46+1PH&l=17.9978%2F54.9698%2F-2.0988"
        src="https://labs.mapbox.com/contribute/#/?owner=godaddy&id=ciovyeygh0029atm6zbntgxk2&access_token=pk.eyJ1IjoiZ29kYWRkeSIsImEiOiJjaWc5b20wcjcwczAydGFsdGxvamdvYnV0In0.JK9HuO6nAzc8BnMv6W7NBQ&utm_source=https%3A%2F%2Fyammbuffet.com%2F&utm_medium=attribution_link&utm_campaign=referrer&l=19%2F54.9702%2F-2.0981&q="
      ></iframe>
    </>
  )
}

export default MapboxMap
