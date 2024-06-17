
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import RecentWorks from './Components/RecentWorks';
import Testinomial from './Components/Testinomial';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-primary1 ">
        <Homepage />
        <About/>
        <RecentWorks/>
        <Testinomial/>
        <Contact/>
      </div>
    </>

  );
}

export default App;
