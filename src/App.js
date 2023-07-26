import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from './adminComponents/Container/Container';
// import Menu from './adminComponents/SideMenu/Menu';
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
import ScrollToTop from './ScrollToTop';
// import Dashboard from './Dashboard';
import TermsOfService from './TermsOfService';
import Dashboardd from './Dashboard/Dashboardd';


function App() {
  return (
    <div className="app">
      
      <Dashboardd />
      {/* <Dashboard /> */}

      {/* <Router>
        <Navbarr />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainBlog />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blogeditor' element={<BlogEditor />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router> */}
          {/* <Route path='/dashboard' element={<div className="dashboard"><Menu/><Container/></div>} /> */}
    </div>
  );
}

export default App;
