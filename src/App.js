import { useState } from 'react';
import './App.css';
// import MenuDine from './Components/MenuDine';
// import BankOffice from './Components/BankOffice';
// import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import KitchenChef from './Components/KitchenChef';
// import KOTList from './Components/KOTList';
// import EatofySetting from './Components/EatofySetting';
// import Restaurant from './Components/Restaurant';


function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  //For MenuDine Components
  // const [menuShown, setmenuShown] = useState(false);

  // const togglemMenu = () => {
  //   setmenuShown(!menuShown);
  // };

  return (
    <div className="md:flex ">
      <Navbar showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
      {/* <MenuDine menuShown={menuShown} togglemMenu={togglemMenu}/> */}
       {/* <Restaurant /> */}
    {/* <Dashboard /> */}
    {/* <BankOffice /> */}
    {/* <EatofySetting /> */}
    {/* <KOTList /> */}
    <KitchenChef />
    </div>
  );
}

export default App;
