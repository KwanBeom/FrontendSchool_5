import './App.css';
import Menu from './components/menu/Menu';
import TextArea from './components/textarea/TextArea';
import Clock from './components/clock/Clock';
import TripList from './components/tripList/TripList';

function App() {
  const name = "CHOI";
  const num1 = 49;
  const num2 = 23;  
  return (
    <div className="App">
      <Menu />
      <TextArea />
      <h1>안녕하세요, {name}</h1>
      <p>계산하기 : {num1}+{num2} = {num1 + num2}</p>
      {[1,2,3].map(x=> x**2).join('/')}
      <Clock />
      <TripList />
    </div>
  );
}

export default App;
