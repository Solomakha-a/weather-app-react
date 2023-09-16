import React from "react";
import axios from "axios";
import { MagnifyingGlass } from 'react-loader-spinner'

export default function Weather(props) {
function handleResponse(response) {
    alert(`The weather in London is ${response.data.temperature.current}`)
}

    let apiKey = "4o2b1et2ad8780b3de6b1ffa54355c3a";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>)
}