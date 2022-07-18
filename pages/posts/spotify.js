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
                <p>The idea behind this project was to create an interface for viewers using the truffle.tv browser extension to quickly and easily view information about the song that a streamer is listening to on stream. To acomplish this, I built a widget in React which pulls data from a Cloudflare worker. The worker caches Spotify API requests and deals with OAuth tokens.
                <br/><br/>The final product can
                <ul>
                    <li>Update in real time with a progress bar and time indicator</li> 
                    <li>Keep the streamer's Spotify account details private</li>
                    <li>Be minimized while still displaying useful information (minimizes with a cool animation)</li>
                    <li>Show album art, song name, and list of artists as well as links to the Spotify pages for the song & artists</li>
                </ul>
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Building The Backend</h2></header>
                <p>
                    <img src="/assets/setupcloudflare.svg"
                    className='float-right padding-top'/>
                The first step to building something with Spotify's API is to create an app in the spotify developer dashboard and set the URI to your server or Cloudflare worker. Once the Spotify app has been set up in the developer dashboard, we need to run through the OAuth 2.0 flow. To make things simpler, I used one Cloudflare worker to setup the streamer's OAuth connection and another to manage user Spotify song data queries. I use the OAuth worker to direct streamers to the Spotify login page. After logging in Spotify kindly returns an access token that expires in 1 hour and a refresh token that does not expire, and can be used to generate new access tokens. I store the refresh token in a key value store (Cloudflare KV) according to a unique org identifier.
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Polling Spotify Data</h2></header>
                <p><img src="/assets/clientcloudflare.svg"
                    className='float-left padding-top'/>
                Once the creator has gone through the OAuth process and their refresh token is stored in the Cloudflare KV, users can query a different worker for the Spotify data. The Cloudflare worker responsible for using the Spotify API sends a request to Spotify's servers and then saves and modifies the response to strip all unecessary data and acount info. This response is cached and set to expire after a short period of time to prevent Spotify from rate limiting API calls. <br/>&nbsp;<br/> The diagram titled "Spotify API Worker Flow" depicts the control logic of the worker. When a user sends a request to the worker, it first checks the cache and returns cached data if not invalid. If the cache is expired, we check a different cache to see if there is a valid Spotify access token and use that to fetch and cache new Spotify data. If there is no access token in the cache, the worker will pull the refresh token for the queried org and request a new access token through the Spotify API. This new token is then cached and used to get the Spotify data.
                
                </p>
                
            </section>
        </main>
    </>
    )
}