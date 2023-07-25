import React, {useState} from "react";

function CreateArea(props) {

  const [text,setText] = useState({
    title:"",
    content:""
  });

  function click(event){
    props.addNote(text);
    setText({
      title:"",
      content:""
    })
    event.preventDefault();
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
      <form>
        <input name="title" placeholder="Title"  value={text.title} onChange={update}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={text.content} onChange={update}/>
        <button onClick={click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
