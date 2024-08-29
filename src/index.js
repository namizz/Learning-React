import React from "react";
import ReactDOM from "react-dom";
import boxes from "./boxes";
import "./index.css";
import BoxesColor from "./Boxescolor";

function App() {
  const [square, setSquares] = React.useState(boxes);
  const [on, setOn] = React.useState(boxes.on);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  const style = {
    backgroundColor: on ? "#222222" : "transparent",
  };
  const squareElements = square.map((s) => <BoxesColor key={s.id} on={s.on} />);
  return (
    <div className="boxes" onClick={toggle} style={style}>
      {squareElements}
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>Boxes will go here</h1>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
