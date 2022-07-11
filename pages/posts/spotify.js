import Link from 'next/link';
import Head from 'next/head'

// import './app.scss'
// import './components/style_modules/scrollbar.scss'
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';
// import './components/Navbar.scss' 
import BigTitle from '../../components/BigTitle/BigTitle';
export default function Spotify(){
    return (
    <>
        <Head>
            <title>Truffle Spotify App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='post'>
            <header><h1>Truffle Spotify App</h1>
            <h2>Find out what song your streamer is jamming to</h2></header>
            <section className='text-section'>
                <header><h2>Design & Concept</h2></header>
                <p>The idea behind this project was to create an interface for viewers using the truffle.tv browser extension to quickly and easily view information about the song that a streamer is listening to on stream. To acomplish this, I built the interface in React and utilized the Spotify API through Cloudflare workers to cache data. <br/><br/> Features include 
                <ul>
                    <li>Updating in real time with a progress bar</li> 
                    <li>Keeping the streamer's Spotify account details private</li>
                    <li>The ability to minimize the overlay and keep useful information</li>
                    <li>To link and display album art, song name, and artist</li>
                </ul>
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Building The Backend</h2></header>
                <p>
                The first step to building something with Spotify’s API is to create an app in the spotify developer dashboard and set the URI to your server or Cloudflare worker. Once the Spotify app has been set up in the developer dashboard, we need to run through the OAuth 2.0 flow. To make things simpler, I used one Cloudflare worker to setup the streamer's OAuth connection and another to manage user Spotify song data queries. I use the OAuth worker to direct streamers to the Spotify login page. After logging in Spotify kindly returns an access token that expires in 1 hour and a refresh token that does not expire, and can be used to generate new access tokens. I store the refresh token in a key value store (Cloudflare KV) according to a unique org identifier.
                </p>
            </section>
        </main>
    </>
    )
}