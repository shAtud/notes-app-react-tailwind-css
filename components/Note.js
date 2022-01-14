import { useState } from "react";
import DeletIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const Note = ({title,id,text,setNote,deleteNote})=>{
    const [noteText,setNoteText] = useState(text);
    const [noteTitle,setNoteTitle] = useState(title);
    const [editMode,setEditMode] = useState(false);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setNote(id,noteText,noteTitle)
        setEditMode(false)
    }
    return(
        <form onSubmit={handleSubmit} className=" bg-white/10 backdrop-blur-[8px] backdrop-saturate-50  rounded-[5px]  text-white/50 h-[300px] font-sans flex flex-col shadow-lg shadow-black">
            {
                !editMode?(
                    <div  className="outline-none w-full bg-transparent text-center px-2 text-3xl font-[700] tracking-wider  break-words">
                        {title}
                    </div>
                ):(
                    <input value={noteTitle}  
                        className="outline-none w-full bg-transparent text-center px-2 text-3xl font-[700] tracking-wider "
                        onChange={(e)=>setNoteTitle(e.target.value)}

                  
                    />
                )
            }
     
        {
            !editMode?(
                <div
                  className="resize-none outline-none w-[95%] bg-transparent px-8 text-justify flex-grow text-[0.9em] font-mono break-words overflow-y-auto  "
                 
                >
                    {text}
                </div>

            ):(
               
                <textarea
                className="resize-none outline-none w-full bg-transparent px-8 text-justify flex-grow text-[0.9em] font-mono  "
                onChange={(e)=>setNoteText(e.target.value)}
                defaultValue={noteText}
                onKeyDown={(e)=>e.key==='Enter'&&handleSubmit(e)}
              ></textarea>
         

            )
        }
      
        <div className="flex justify-end py-1 px-2">
            <EditIcon 
                className={`w-6 transition-all hover:opacity-80 hover:cursor-pointer ${editMode?'scale-0':'scale-100'}`} 
                onClick={()=>setEditMode(true)}
            />
            <DeletIcon 
                className='w-6 transition-all hover:opacity-80 hover:cursor-pointer'
                onClick={()=>deleteNote(id)}
                
            />

        </div>
        
    </form>
    )
}

export default Note;