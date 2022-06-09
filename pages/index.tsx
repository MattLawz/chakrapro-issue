import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar/App';
import { Header } from '../components/Header/App';

const Home: NextPage = () => {
  return (
   <>
   <Navbar />
   <Header />
   </>
  )
}

export default Home
