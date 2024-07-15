import './App.css';
import {Routes, Route} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
