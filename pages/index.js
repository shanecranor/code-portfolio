import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import BigTitle from '../components/BigTitle/BigTitle';
import LanguagesAndProjects  from '../components/LanguagesAndProjects/LanguagesAndProjects';
import About from '../components/About/About';
import Section from '../components/Section/Section';
import FeaturedProject from '../components/FeaturedProject/FeaturedProject';
export default function Home(){
    return(<>
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
            </>    
            )
}