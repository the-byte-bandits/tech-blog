import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './adminComponents/Container/Container';
import Menu from './adminComponents/SideMenu/Menu';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AboutUs from './About';
import ContactUs from './ContactUs';
import MainBlog from './MainBlog';
import BlogPage from './BlogPage';
import Navbarr from './Navbarr';
import './App.css';
import Login from './Login';
import Register from './Register';
import BlogEditor from './BlogEditor';
import Footer from './Footer';


function App() {
  return (
    <div className="app">
      <Router>
        <Navbarr />
        <Routes>
          <Route path='/' element={<MainBlog />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogeditor' element={<BlogEditor />} />
          <Route path='/dashboard' element={<div className="dashboard"><Menu/><Container/></div>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
