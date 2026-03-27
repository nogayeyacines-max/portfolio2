import { Outlet } from 'react-router-dom';


import Navbar from '../composants/Navbar';
import Footer from '../composants/Footer';



function Layout() {


  return (
  
    <div className='app'>
      <Navbar  />
  

      <main className="main">
          <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  
  );
}

export default Layout;