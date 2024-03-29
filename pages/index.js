import PokeList from '@/components/PokeList'
import Head from 'next/head'
import { React } from 'react'

export default function Home () {
  return (
    <>
      <Head>
        <title>PokeHome</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-wrap content-center align-center justify-center flex-col">
        <PokeList />
      </main>
    </>
  )
}
