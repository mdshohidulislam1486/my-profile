
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './page/ContactPage/ContactPage';
import Home from './page/Home/Home/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
