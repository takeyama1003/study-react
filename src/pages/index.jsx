import Head from 'next/head'
import { useEffect } from 'react/'
import { useState } from 'react/'
import { useCallback } from 'react/'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'

export default function Home() {

const [foo, setFoo] = useState(1);
const [text, setText] = useState("");
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

useEffect(()=>{
  document.body.style.backgroundColor = "lightblue";
  return() =>{
    document.body.style.backgroundColor = "";
  }
}, []);

const handleChange = useCallback((e)=>{
  if(e.target.value.length > 5){
    alert("5文字以内にしてください");
    return;
  }
  setText(e.target.value.trim());
},[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      {isShow ? <h1>{foo}</h1> : null}
      
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Main page="index" />
      <Footer />
    </div>
  )
}
