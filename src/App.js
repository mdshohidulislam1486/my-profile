
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProjects from './page/AddProjects/AddProjects';
import ContactPage from './page/ContactPage/ContactPage';
import Home from './page/Home/Home/Home';
import Footer from './page/shared/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/addproject" element={<AddProjects/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
