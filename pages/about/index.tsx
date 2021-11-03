import {memo} from "react";
import type {NextPage} from 'next'
import Head from 'next/head'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello NextJS - About</title>
      </Head>
      <h1>About</h1>
    </div>
  )
}

export default memo(About)

