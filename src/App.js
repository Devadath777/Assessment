import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addd from './components/Addd';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Blog/>}></Route>
      <Route path='/add'element={<Addd/>}></Route>
    </Routes>
 </BrowserRouter>


  );
}

export default App;
