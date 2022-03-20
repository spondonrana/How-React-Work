import './App.css';
import Divice from './Components/Divice/Divice';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Divice name='I phone' price='10000'></Divice>
      <Watch></Watch>
    </div>
  );
}

export default App;
