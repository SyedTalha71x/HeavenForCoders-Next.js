import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import hunting from '../images/hunting.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // console.log(styles);
  return (
    <>
      <Head>
        <title>Hunting- Coders Blog</title>
        <meta name='keywords' content='next, hunting coder, coder blog, blogpost' ></meta>
        {/* <script src='/script.js'></script> */}
      </Head>

      <div className="home h-screen w-full bg-slate-200 flex justify-center items-center">
          <div className="home-content flex justify-center items-center flex-col text-center">
            <h1 className='text-4xl font-bold text-purple-900'>Welcome to Hunting Coders Blog</h1>
            <p className='w-2/3 font-semibold py-2 '>A Heaven for Coders. Computer programmers design, develop and test software and ensure software adheres to best practices in performance, reliability and security. Computer programmers can work developing mobile applications, coding video games, programming websites and much more.</p>
            <button className="btn-read bg-purple-900 text-white px-2 py-1 rounded-lg my-2">
              Read More
            </button>
          </div>
          {/* <div className="image-cover">
            <Image className='image'
              src={hunting}
              alt='Home Picture'
              height={300}
              width={600}
            />
          </div> */}
      </div>


    </>

  )
}
