import Head from 'next/head'
import 'src/styles/globals.css'
import { usebgColor } from 'src/hooks/usebgColor'
import { useCounter } from 'src/hooks/useCounter'
import { useInputArray } from 'src/hooks/useInputArray'

function MyApp({ Component, pageProps }) {

  const counter = useCounter();
  const inputArray = useInputArray();
  usebgColor();

  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  ) 
}

export default MyApp
