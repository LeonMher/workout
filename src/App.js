import './App.css';
import {
  BrowserRouter, Routes,
  Route
} from 'react-router-dom'
import NavBar from './NavBar';
import Programs from './Programs';
import Home from './Home';
import AboutUs from './AboutUs';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
    
    <Routes>
      
      
     
          <Route path='/' exact element={<Home />}/>
          <Route path='/programs' element={<Programs />}/>
          <Route path='/about' element={<AboutUs />}/>
        
      </Routes>

     
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
