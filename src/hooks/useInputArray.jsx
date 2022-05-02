import { useState } from 'react/'
import { useCallback } from 'react/'

export const useInputArray = () =>{

    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleAdd = useCallback(()=>{
        setArray((prevArray)=>{
          if(prevArray.includes(text)){
            alert("同じ要素がすでに入ってます。");
            return prevArray;
          }
          return [...prevArray,text];
        });
      },[text]);
    
      const handleChange = useCallback((e)=>{
        if(e.target.value.length > 5){
          alert("5文字以内にしてください");
          return;
        }
        setText(e.target.value.trim());
      },[]);

      return{text, array, handleChange, handleAdd};

};