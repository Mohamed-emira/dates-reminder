import "./App.css";
import Content from "./Component/Content/Content";
import React,{useState} from "react";
import { person } from "./Component/Data/Data";
function App() {
  const[personData,setPersonData]=useState(person)
  const handleDelete=()=>{
    setPersonData([])
  }
  const handleView=()=>{
    setPersonData(person)
  }
  return (
    <div className="App">
      <Content person={personData} deleteData={handleDelete} viewData={handleView} />
    </div>
  );
}

export default App;
