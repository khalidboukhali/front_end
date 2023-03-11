import './App.css';
import { Body } from './Components/Body/Body';
import NavigationBar from './Components/NavigationBare/NavigationBar';
import SideBare from './Components/SideBare/SideBare';

function App() {
  return (
    <div className="App">
       <SideBare />
       <div className="appBody">
          <NavigationBar />
          <Body />
       </div>
    </div>
  );
}

export default App;
