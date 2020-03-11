import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import useLocalStorageState from "./hooks/useLocalStorage";

const App = () => {
   const [coinData, setCoinData] = useState([]);
   const [darkmode, setDarkMode] = useLocalStorageState("darkmode", false);

   const toggleDarkMode = () => {
      setDarkMode(!darkmode);
   };

   useEffect(() => {
      axios
         .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
         )
         .then(res => setCoinData(res.data))
         .catch(err => console.log(err));
   }, []);

   return (
      <div className={`App ${darkmode ? "dark-mode" : {}}`}>
         <Navbar darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
         <Charts coinData={coinData} />
      </div>
   );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
