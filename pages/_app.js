import Head from 'next/head'
import './app.scss'
import Navbar from './components/Navbar';
import './components/Navbar.scss' 
import BigTitle from './components/BigTitle';
import './components/BigTitle.scss'
import LanguagesAndProjects  from './components/LanguagesAndProjects';
import './components/LanguagesAndProjects.scss' 
import './components/Project.scss'
import About from './components/About';
import './components/About.scss';
import FeaturedProjects from './components/FeaturedProjects';
import './components/FeaturedProjects.scss'
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
            <About/>
            <FeaturedProjects/>
            <LanguagesAndProjects/>
        </main>
    </>)
}