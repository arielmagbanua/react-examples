import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>

      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
    </div>
  )
}
