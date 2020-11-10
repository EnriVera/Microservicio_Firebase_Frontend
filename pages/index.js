import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {

  return (
    <div className="w-screen">
      <Head>
        <title>Workflow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
