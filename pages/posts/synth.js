import Link from 'next/link';
import Head from 'next/head'

// import './app.scss'
// import './components/style_modules/scrollbar.scss'
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';
// import './components/Navbar.scss' 
import BigTitle from '../../components/BigTitle/BigTitle';
export default function Synth(){
    return (
    <>
        <Head>
            <title>Math Synth Experiment</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main className='post'>
            <header><h1>Math Synth Experiment</h1>
            <h2>Create a wall of sound by writing equations</h2></header>
            <section className='text-section'>
                <header><h2>Idea Origin</h2></header>
                <p> I built this project for a music technology course. The requirements for the project were very lax and I had some extra time, so I built out some more interesting features. The bare minimum project had to be capable of playing multiple notes and having more than one waveform option (square or sine for example).  I built a simple synth that could be played using the web audio API, and while playing with parameters, realised that it could be cool to be able to modify them in real time.
                {/* <br/><br/>The final product can
                <ul>
                    <li>Update in real time with a progress bar and time indicator</li> 
                    <li>Keep the streamer's Spotify account details private</li>
                    <li>Be minimized while still displaying useful information (minimizes with a cool animation)</li>
                    <li>Show album art, song name, and list of artists as well as links to the Spotify pages for the song & artists</li>
                </ul> */}
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Javascript Inception</h2></header>
                <p>
                    <img src="/assets/setupcloudflare.svg"
                    className='float-right padding-top'/>
                To make the modular equation aspect of this synth work, I needed something that could evaluate mathematical expressions. Javascript has two main options for this, 'eval()' and 'new Function.' Initially I used eval for everything, but for performance reasons, I switched to creating functions for anything that only changes when the user types.
				<h2>				
				 I need to make graphs showing the performance of new function vs eval on something like a sin wave.</h2>
                </p>
            </section>
            <section className='text-section'>
                <header><h2>Future Plans</h2></header>
                <p><img src="/assets/clientcloudflare.svg"
                    className='float-left padding-top'/>
					Now that I have this little demo working, I would like to expand to building a fully featured node based modular synth. This will end up being significantly more work, but it should also have infinite flexibility. Before I build the node based platform, I would like to figure out how to get a more granular control over the waveforms and actually allow the users to write the equation of the wave form instead of using a web audio API oscillator.
                
                </p>
                
            </section>
        </main>
    </>
    )
}