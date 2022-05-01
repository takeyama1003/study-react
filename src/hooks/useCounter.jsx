import { useState } from 'react/'
import { useCallback } from 'react/'

export const useCounter = () =>{

    const [foo, setFoo] = useState(1);
    const [isShow, setIsShow] = useState(true);

    const handleClick = useCallback (
        ()=>{
          if(foo < 10){
            setFoo(foo => foo + 1);
          }
        },
        [foo]
      );
    
      const handleDisplay = useCallback(() =>{
        setIsShow((isShow)=>!isShow);
      },[]);

      return{foo, isShow, handleClick, handleDisplay};

};