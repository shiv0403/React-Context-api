import React, { Component } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Booklist.css";

class Booklist extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        style={{ background: theme.bg, color: theme.syntax }}
        className="booklist"
      >
        <ul>
          <li style={{ background: theme.ui }}>The secret seven</li>
          <li style={{ background: theme.ui }}>Rich dad Poor dad</li>
          <li style={{ background: theme.ui }}>The Alchemist</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
