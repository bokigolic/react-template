import './App.css';
import Sound from './import Sound/Sound';
import Rate from './rate Form/Rate';
import Timer from './set TImer/Timer';
import LoginForm from './submit Form/LoginForm';
import WeatherApp from './weather app/WeatherApp';


function App() {
  return (
    <div className="App">
      <WeatherApp />
      <LoginForm />
      <Timer />
      <Rate />
   
      {/*<Sound />*/}
    </div>
  );
}

export default App;
