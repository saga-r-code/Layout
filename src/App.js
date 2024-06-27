import './App.css';
import BankOffice from './Components/BankOffice';
// import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
// import Restaurant from './Components/Restaurant';


function App() {
  return (
   <div className='md:flex '>
   <Navbar />
    {/* <Restaurant /> */}
    {/* <Dashboard /> */}
    <BankOffice />
   </div>
  );
}

export default App;
