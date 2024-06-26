import './App.css';
import Navbar from './Components/Navbar';
import Restaurant from './Components/Restaurant';

function App() {
  return (
   <div className='md:flex '>
   <Navbar />
    <Restaurant />
   </div>
  );
}

export default App;
