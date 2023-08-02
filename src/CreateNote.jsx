import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
    const[expand,setExpand]=useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]:value,
            };
        })
        console.log(note);
    };

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        })
    }

    const expandIt=()=>{
        setExpand(true);
    }
    
    const backToNormal=()=>{
        setExpand(false);
    }
    return (
        <>
            <div className='main_note' onDoubleClick={backToNormal}>
                <form>
                {expand?<input type="text" name="title" placeholder='Title' value={note.title} onChange={InputEvent}  autoComplete='off' />:null}
                    <textarea rows="" columns="" name="content" value={note.content} onChange={InputEvent} onClick={expandIt} placeholder='Write a note...'>
                    </textarea>
                    {expand?<Button onClick={addEvent}>
                        <span className='plus_sign'>+</span>
                    </Button>:null}
                </form>
            </div>
        </>
    )
};

export default CreateNote;
