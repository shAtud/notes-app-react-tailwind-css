import { useEffect, useState } from "react"
const useSm = props =>{
    const [sm,setSm] = useState(false);
   useEffect(()=>{
    setSm(window.innerWidth >=768);
       const onResize = ()=>{
           setSm(window.innerWidth >=768);
           console.log(window.innerWidth,window.innerWidth >=768,sm)
       }
        window.addEventListener('resize',onResize);
        return ()=>{
            window.removeEventListener('resize',onResize);
        }
   },[])

   return sm;
}

export default useSm;