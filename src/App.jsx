import './App.css'
import Welcome from './Components/Welcome';
import Students from './Components/Students';
import Staff from './Components/Staff';
import Courses from './Components/Courses';
import Navbar from './Components/NavBar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <Welcome></Welcome>
      <Students></Students>
      <Staff></Staff>
      <Courses></Courses>
    </>
  )
}

export default App