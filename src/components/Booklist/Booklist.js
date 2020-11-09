import React, { Component, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Booklist.css";
import { BookContext } from "../../context/BookContext";

// class Booklist extends Component {
//   static contextType = ThemeContext;

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         style={{ background: theme.bg, color: theme.syntax }}
//         className="booklist"
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The secret seven</li>
//           <li style={{ background: theme.ui }}>Rich dad Poor dad</li>
//           <li style={{ background: theme.ui }}>The Alchemist</li>
//         </ul>
//       </div>
//     );
//   }
// }

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
  return (
    <div
      style={{ background: theme.bg, color: theme.syntax }}
      className="booklist"
    >
      {console.log(books)}
      <ul>
        {books.map((book) => {
          return <li style={{ background: theme.ui }}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Booklist;

// export default Booklist;
