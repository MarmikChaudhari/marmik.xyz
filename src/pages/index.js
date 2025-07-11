import Head from 'next/head';
import { Home } from '../components/Home'

export default function home() {
  return (
    <>
      <Home/>
      <Head>
        <title>marmik&apos;s web eden</title>
        
        {/* Basic Meta Tags */}
        
        {/* Favicon */}
        <link rel='icon' href='/static/icon.ico' />
        <link rel='apple-touch-icon' href='/static/meta/icon.png' />
        
        {/* Basic Open Graph for link previews */}
        <meta property='og:title' content='marmik&apos;s web eden' />
        <meta property='og:image' content='https://marmik.xyz/static/meta/icon.png' />
      </Head>
    </>
  )
}
