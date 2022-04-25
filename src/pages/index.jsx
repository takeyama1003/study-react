import Head from 'next/head'
import { useEffect } from 'react/'
import { useState } from 'react/'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'
import styles from 'src/styles/Home.module.css'

export default function Home() {

const [foo, setFoo] = useState(1);

const handleClick = (e) =>{
  setFoo(foo => foo + 1);
  setFoo(foo => foo + 1);
}

useEffect(()=>{
  document.body.style.backgroundColor = "lightblue";
  return() =>{
    document.body.style.backgroundColor = "";
  }
}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button href='/about' onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
