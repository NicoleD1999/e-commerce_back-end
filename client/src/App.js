import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'

function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    {/* <Route path ='shoes' element={<Shoes/>}/>
    <Route path = 'shirts' element={<Shirts/>}/>
    <Route path = 'hats' element={<Hats/>}/>
    <Route path = 'music' element={<Music/>}/>
    <Route path = 'shorts' element={<Shorts/>}/> */}
    </Routes>
  </Router>
  );
}

export default App;
