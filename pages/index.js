import Head from 'next/head'
import Link from 'next/link';
import Avatar from './avatar'
import Languages  from './components/Languages';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Languages/>
    </div>
  )
}
