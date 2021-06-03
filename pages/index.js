import Head from 'next/head'
import Booking from '../components/Booking'
import BookingMobile from '../components/BookingMobile'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.desktop}>
        <Booking />
      </div>
      <div className={styles.mobile}>
        <BookingMobile />
      </div>
    </div>
  )
}
