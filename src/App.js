import React from "react";
import "./App.css";
import DummyImg from "../assets/image_01.jpg";
import MyTable from "./component/MyTable";
import PageList from "./pages/PageList";

function App() {
  return (
    <div>
      <h3 className="text-center text-2xl ">This is App component</h3>
      <h1 className="text-3xl font-bold underline text-red-500 ">
        Hello world!
      </h1>
      <div>
        <MyTable />
        <p style={{ color: "green" }}>
          While we are at it, let’s also try to add some CSS to our app, shall
          we? You can use inline styling as well. I will create one App.css file
          to add some pretty basic styling.
        </p>
        <img src={DummyImg} />
      </div>
      <PageList
        list={[
          { id: 101, name: "Hundred One" },
          { id: 102, name: "Hundred Two" },
        ]}
      />
    </div>
  );
}

export default App;
