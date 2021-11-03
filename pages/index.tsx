import {memo, useEffect} from "react";
import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  useEffect(() => {
     if (window.ethereum) {
       console.log(`I'm here: 0`)
     }
  }, [])

  return (
    <div>
      <Head>
        <title>Hello NextJS - Home</title>
      </Head>
      <h1>Home</h1>
    </div>
  )
}

export default memo(Home)
