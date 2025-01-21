import React from "react";
import "./App.css";
import DummyImg from "../assets/image_01.jpg";
// import MyTable from "./component/MyTable";

function App() {
  return (
    <div>
      <h3>This is App component</h3>
      <div className="my-container">
        {/* <MyTable /> */}
        <p style={{ color: "green" }}>
          While we are at it, let’s also try to add some CSS to our app, shall
          we? You can use inline styling as well. I will create one App.css file
          to add some pretty basic styling.
        </p>
        <img src={DummyImg} />
      </div>
    </div>
  );
}

export default App;
