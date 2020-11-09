import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Booklist from "./components/Booklist/Booklist";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import Themetoggle from "./components/Themetoggle";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <Themetoggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
