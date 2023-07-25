import React, { useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes , setNotes] = useState([]);

  function addNote (text){
    console.log(text);
    setNotes((prev)=>{
      return [...prev, text];
    })
  }

  function deleteItem (id){
    setNotes((prev)=>{
      return prev.filter((item,index)=>{
          return index !== id;
      })
      //return [...prev, text];
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((item, index) => {
        return <Note  title={item.title} content={item.content} key={index} id={index} deleteItem={deleteItem} />
        })}      
      <Footer />
    </div>
  );
}

export default App;
