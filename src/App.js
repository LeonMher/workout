import './App.css';
import {
  BrowserRouter, Routes,
  
  Route
} from 'react-router-dom'
import NavBar from './NavBar';
import Programs from './Programs';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
    
    <Routes>
      
      
     
          <Route path='/' exact element={<Home />}/>
          <Route path='/programs' element={<Programs />}/>
        
      </Routes>
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
