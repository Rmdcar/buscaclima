import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/weatherInformations";

function App() {
  const [clima, setClima] = useState();

  const inputRef = useRef();
  async function searchCity() {
    const city = inputRef.current.value;
    const key = "cebcd482eda57fa9a6714c1c2ba91885";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);

    setClima(apiInfo.data);
    inputRef.current.value = ''
  }

  return (
    <>
      <div>
        <h1>Previsão do tempo</h1>
        <input
          ref={inputRef}
          type="text"
          placeholder="Digite o nome da cidade"
        ></input>
        <button onClick={searchCity}>Buscar clima</button>
      </div>
      {clima && <WeatherInformations clima={clima} />}{" "}
    </>
  );
}

export default App;
