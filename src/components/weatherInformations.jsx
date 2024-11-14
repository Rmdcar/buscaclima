function WeatherInformations({ clima }) {
  console.log(clima);
  return (
    <div>
      
      <h1>Cidade: {clima.name}</h1>
      <h1>Temperatura: {Math.round(clima.main.temp)} ºC</h1>
    </div>
  );
}
export default WeatherInformations;
