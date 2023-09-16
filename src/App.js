
import './App.css';
import Form from "./Form";
import Button from "./Button";
import CurrentButton from "./CurrentButton";
import Tempreture from "./Tempreture";
import WeatherTempreture from "./WeatherTempreture";
import Description from "./Description";
import Footer from "./Footer";

function App() {
  return <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <div className="row mb-3">
                <Form />
                <Button />
                <CurrentButton />
              </div>
              <Tempreture />
            </div>
            <div className="row">
              <div className="col-6">
                <WeatherTempreture />
              </div>
              <div className="col-6">
                <Description />
              </div>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
      <Footer />
    </div>
  ;
}
export default App;
