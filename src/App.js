import BlogPage from './BlogPage';
import MainBlog from './MainBlog';
import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from './adminComponents/Container/Container';
import Menu from './adminComponents/SideMenu/Menu';



function App() {
  return (
    <div className="app">

      <Menu/>
      <Container/>

      {/* <MainBlog /> */}
      <BlogPage />

    </div>
  );
}

export default App;
