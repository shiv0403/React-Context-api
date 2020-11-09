import React, { Component, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext;
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <div
//                   style={{ background: theme.ui, color: theme.syntax }}
//                   className="navbar"
//                 >
//                   <h1>Book reading list</h1>
//                   <div onClick={toggleAuth} className="navbar_login">
//                     {isAuthenticated ? "Logged in" : "Logged out"}
//                   </div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </div>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{ background: theme.ui, color: theme.syntax }}
      className="navbar"
    >
      <h1>Book reading list</h1>
      <div onClick={toggleAuth} className="navbar_login">
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

// export default Navbar;
