import AdminPanel from './AdminPanel';
import './App.css';
import Container from './adminComponents/Container/Container';
import Menu from './adminComponents/SideMenu/Menu';

function App() {
  return (
    <div className="app">
     {/* Admin SideBar Menu  */}
      <Menu/>
      {/* Main Admin Panel */}
      <AdminPanel/>
    
    </div>
  );
}

export default App;
