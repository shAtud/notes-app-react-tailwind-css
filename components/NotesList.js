import { useState } from "react";
import uniqid from 'uniqid';
import useSm from "../hooks/useSm";
import Note from "./Note";
import PlusIcon from "./PlusIcon";
import SearchIcon from "./SearchIcon";

const NotesList = props=>{
    const sm = useSm();
  
    
    const [notes,setNotes] = useState(new Array(30).fill(0).map((el,index)=>{
            return{
                id:uniqid(),
                title:`Note title ${index}`,
                text:`sama3likom this is a text hihihihhihihhi`,

            }
    }))
    const [searchQuery,setSearchQuery] = useState('');
    console.log(!sm?notes.length:'sdaasd')
        
    const setNote = (id,text,title)=>{
        const newNotes = [...notes];
        const index = newNotes.findIndex(el=>el.id === id);
      
        newNotes[index].text = text;
        newNotes[index].title = title;
        setNotes(newNotes);
        
    }
    const addNote = ()=>{
        const newNotes = [...notes];
        newNotes.unshift({
            id:uniqid(),
            text:'text...........',
            title:'type your title here',
        })
        setNotes(newNotes);

    }
    const deleteNote = (id)=>{
        const newNotes = [...notes];
        const index = newNotes.findIndex(el=>el.id === id);
        newNotes = newNotes.filter(el=> el.id != id)
        setNotes(newNotes)


    }
    return(
       <div className="flex flex-col bg-black mt-24 min-w-screen min-h-screen">
            <h1 className="text-white text-5xl tracking-widest text-center mb-4">Notes App</h1>
            <div className="flex items-center rounded-[5px]  mx-auto w-[70%] sm:w-[50%]  h-[40px] relative bg-white/10 backdrop-blur-[8px] backdrop-saturate-50">
               
                <SearchIcon 
                    className='w-7 h-7 ml-2  text-gray-500'
                    placeholder='search'
                />
                 <PlusIcon 
                    className='w-[30px] absolute right-0 translate-x-[150%] bg-white/10 backdrop-blur-[8px] backdrop-saturate-50  rounded-[50%]  text-gray-500 hover:scale-110 transition-all ease-in hover:cursor-pointer'
                    onClick={()=>addNote()}
                 />
                <input 
                    type='search' 
                    className="bg-transparent outline-none flex flex-grow text-white/70 placeholder-gray-700 indent-2" 
                    placeholder="search for a note ..."
                    onChange={(e)=>setSearchQuery(e.target.value)}
                  
                />
            </div>
            <div className="relative w-full      grid grid-cols-1 md:grid-cols-3  py-[50px] lg:px-[10%] md:px-[3%] px-[10%] gap-x-8 gap-y-[50px]  text-white font-serif text-xl " >
             
                    
            
              {   
                  new Array(!sm?notes.length:Math.floor(notes.length /3)).fill(0).map((el,index)=>{
                      return(
                        <div key={index} className={`w-[200px] h-[200px] rounded-[50%] absolute ${index % 2 ===0?'bg-purple-700 drop-shadow-[0_0px_8px_#a21caf]':'bg-orange-500 drop-shadow-[0_0px_15px_#f97316] '}    `}  style={{
                            top:`${350*index}px`,
                            [`${index % 2 ===0?'left':'right'}`]:'20px',
                         
                        }}></div>
                      )
                  })
              }
          
          
         
          {notes.filter(el=>el.text.includes(searchQuery)).map(({text,id,title})=>{
              return(
                 <Note 
                    text={text} 
                    title={title} 
                    setNote={setNote} 
                    id={id} 
                    key={id}
                    deleteNote ={deleteNote}
                    />
              )
          })}
          
      </div>

       </div>
    
    )
}

export default NotesList;