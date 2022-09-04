import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Shoes from './pages/Shoes'
import Shorts from './pages/Shorts'
import Music from './pages/Music';
import Shirts from './pages/Shirts';
import Hats from './pages/Hats';
import Navigation from './components/NavBar/Navbar';


function App() {
  return (
  <>
  <Navigation/>
  <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path ='shoes' element={<Shoes/>}/>
    <Route path = 'shirts' element={<Shirts/>}/>
    <Route path = 'hats' element={<Hats/>}/>
    <Route path = 'music' element={<Music/>}/>
    <Route path = 'shorts' element={<Shorts/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
