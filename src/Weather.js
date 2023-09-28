import React from "react";

export default function Weather() {
    return <div className="Weather">  
    <div className="wrapper">    
        <form>
            <div className="row mb-3">
                <div className="col-6">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                    
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Location" className="btn btn-primary w-100"/>
                </div>
                </div>
        </form>
    
        
        <h1>London</h1>
    <ul>
        <li>Last updated: Monday 10:20</li>
        <li>Broken clouds</li>
    </ul>
    <div className="row mt-3">
    <div className="col-6"> 
<div className="d-flex">
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="Broken Clouds"/>
    <div>
    <span className="temp">17</span>
    <span className="unit">°C</span>
    </div>
    </div>
    </div>
    <div className="col-6">
        <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 3km/h</li>
        </ul>
    </div>
    </div>
    </div> 
    <footer>
        This project was coded by <strong>Anastasia B</strong> and is <a href="https://github.com/Solomakha-a/weather-app-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://weather-app-react-abradshaw.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
    </footer>
    </div>

}