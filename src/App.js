import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Body } from './Components/Body/Body';
import NavigationBar from './Components/NavigationBare/NavigationBar';
import { Dashboard } from './Components/Pages/DashBoardContent/Dashboard';
import SideBare from './Components/SideBare/SideBare';

function App() {
  return (
    <div className="App">
       <SideBare />
       <div className="appBody">
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/createProject' element={<Body />} />
          </Routes>
       </div>
    </div>
  );
}

export default App;
