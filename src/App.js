import './App.scss';
import Header from './components/Header/Header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidebar-container'>

        </div>
        <div className='app-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default App;
