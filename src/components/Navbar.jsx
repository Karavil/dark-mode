import React from "react";

const Navbar = props => {
   console.log(props);
   const toggleDarkMode = e => {
      e.preventDefault();
      props.toggleDarkMode();
   };

   return (
      <nav className="navbar">
         <h1>Crypto Tracker</h1>
         <div className="dark-mode__toggle">
            <div
               onClick={toggleDarkMode}
               className={props.darkmode ? "toggle toggled" : "toggle"}
            />
         </div>
      </nav>
   );
};

export default Navbar;
