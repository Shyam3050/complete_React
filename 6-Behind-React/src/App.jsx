import React, { useState, useCallback } from "react";
import Button from "./Component/UI/Button";
import Demo from "./Component/Demo/Demo";
import DemoList from "./Component/Demo/DemoList"
import "./App.css";
function App() {
  const [title,setTitle] = useState('Title')

  function titleChangeHand(){
    setTitle("New Title");
  }
  return (
    <div className="app">
      <h1>Hi there</h1>
      
      <DemoList items = {[2,3,4,5]} title = {title}></DemoList>
      
      <Button onClick = {titleChangeHand} >cl</Button>
      
    </div>
  );
}

export default App;
