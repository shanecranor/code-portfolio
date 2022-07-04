import Head from 'next/head'
import './app.scss'
import './components/style_modules/scrollbar.scss'
import Navbar from './components/Navbar';
import './components/Navbar.scss' 
import BigTitle from './components/BigTitle';
import './components/BigTitle.scss'
import LanguagesAndProjects  from './components/LanguagesAndProjects';
import './components/LanguagesAndProjects.scss' 
import './components/Project.scss'
import About from './components/About';
import './components/About.scss';
import Section from './components/Section';
import './components/Section.scss'
import FeaturedProject from './components/FeaturedProject';
import './components/FeaturedProject.scss'
export default function App(){
    return (<>
        <Head>
            <title>Interactive Code Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <Navbar/>
        </header>
        
        <main>
            <BigTitle text="Code Portfolio"/>
            {/* <About/> */}
            <Section header="Featured Projects" startOpen={true}>
                <FeaturedProject 
                    title="Truffle Spotify App"
                    description="Overlay that displays cached Spotify data from a Cloudlare worker"
                />
                <FeaturedProject 
                    title="Math Synth Experiment"
                    description="Create a wall of sound by writing equations"
                />
                <FeaturedProject 
                    title="Bubblz.Space"
                    description="A peer to peer video communication web app with a twist"
                />
            </Section>
            <Section header="All Projects">
                <LanguagesAndProjects/>
            </Section>            
        </main>
    </>)
}