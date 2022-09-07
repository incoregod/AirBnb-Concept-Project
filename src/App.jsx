import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const cards = data.map((item) => {
    return <Card key={item.id} {...item} darkMode={darkMode} />;
  });

  function handleDarkMode() {
    let appContainer;
    if (darkMode) {
      appContainer = "app-container-dark";
      document.body.style = "background:black";
    } else {
      appContainer = "app-container-light";
      document.body.style = "background:white";
    }
    return appContainer;
  }

  return (
    <div className={handleDarkMode()}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <section className="cards-list ">{cards}</section>
    </div>
  );
}

export default App;
