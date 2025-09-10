import './App.css'
import {useState} from 'react'
import Welcome from './Components/Welcome';
import Students from './Components/Students';
import Staff from './Components/Staff';
import Courses from './Components/Courses';
import Navbar from './Components/NavBar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const App = () => {

const [activeComponent, setActiveComponent] = useState('Welcome')

const handleNav = (ev, page) => {
  ev.preventDefault();
  console.log(`The ${page} link was clicked.`);
        
  setActiveComponent(page)
};

const renderComponent = () =>{
  switch(activeComponent){
    case 'Staff':
      return <Staff />;
    case 'Students':
      return <Students />;
    case 'Courses':
      return <Courses />;
    case 'Welcome':
      return <Welcome msg="Welcome to Cantor" />;
    default:
      return <Welcome msg="Hello World" />;
  }
}


  return (
     <>
    <Navbar handleNav={handleNav} />
    <Banner/>
    <main>
      {renderComponent()}
    </main>
    <Footer />
    </>
  )
}

export default App