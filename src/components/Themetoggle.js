import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toogle Theme</button>;
//   }
// }

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toogle Theme</button>;
};

export default ThemeToggle;

// export default ThemeToggle;
