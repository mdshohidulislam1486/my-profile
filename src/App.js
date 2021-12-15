
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactPage from './page/ContactPage/ContactPage';
import Home from './page/Home/Home/Home';
import Footer from './page/shared/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
