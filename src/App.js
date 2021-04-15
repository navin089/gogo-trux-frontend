import React, { useState } from "react";
import "./App.css";
import Panel from "./components/Panel";
import NavBar from "./components/NavBar";
import { PanelContext } from "./PanelContext";

function App() {
  const [item, setItem] = useState();

  return (
    <div className="app">
        <PanelContext.Provider value={{ item, setItem }}>
            <NavBar />
            <Panel />
        </PanelContext.Provider>
    </div>
  );
}

export default App;
