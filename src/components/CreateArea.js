import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {

  const [text,setText] = useState({
    title:"",
    content:""
  });
  
  const [noteBool, setNoteBool] = useState(false);

  function click(event){
    props.addNote(text);
    setText({
      title:"",
      content:""
    })
    event.preventDefault();
  }

  function setup(event){
        event.target.rows="3";
        setNoteBool((prev)=>!prev);
  }

  function update(event){
      const inpName = event.target.name;
      const inpText = event.target.value;
      
      setText((prev)=>{

        return{
          ...prev,
          [inpName]:inpText
        }
        // if(inpName==="title"){
        //   return{
        //     title : inpText,
        //     content : prev.content
        //   }
          
        // } else if(inpName==="content"){
        //   return{
        //     title : prev.title,
        //     content : inpText
        //   }
        // }
      })
  }

  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title"  value={text.title} onChange={update} hidden={!noteBool}/>
        <textarea name="content" placeholder="Take a note..." rows={noteBool ? 3 : 1} value={text.content} onChange={update} onClick={setup}/>
        {/* rows value has been changed using conditional rendering but it is also possible with accessing the target element using event.target. */}
        <Zoom in={noteBool}><Fab onClick={click}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
