import React from "react";

export default function Weather() {
    return <div className="Weather">       
        <form>
            <div className="row">
                <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
                </div>
        </form>
    
        
        <h1>London</h1>
    <ul>
        <li>Last updated: Monday 10:20</li>
        <li>Broken clouds</li>
    </ul>
    <div className="row">
    <div className="col-6"> 
    <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="Broken Clouds"/>
    17°C
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

}