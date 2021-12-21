
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProjects from './page/AddProjects/AddProjects';
import ContactPage from './page/ContactPage/ContactPage';
import Home from './page/Home/Home/Home';
import MyProjects from './page/MyPorjects/MyProjects';
import ProjectsDetails from './page/ProjectsDetails/ProjectsDetails';
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
          <Route path="/myprojects" element={<MyProjects/>}/>
          <Route path="/projectdetails/:projectid" element={<ProjectsDetails/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
