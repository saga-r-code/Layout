import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
// import Restaurant from './Components/Restaurant';

function App() {
  return (
   <div className='md:flex '>
   <Navbar />
    {/* <Restaurant /> */}
    <Dashboard />
   </div>
  );
}

export default App;
