import Head from 'next/head'
import './app.scss'
import Navbar from './components/Navbar';
import './components/Navbar.scss' 
import BigTitle from './components/BigTitle';
import './components/BigTitle.scss'
import LanguagesAndProjects  from './components/LanguagesAndProjects';
import './components/LanguagesAndProjects.scss' 
import './components/Project.scss'
 
export default function App(){
    return (
        <div className="app-container">
          <Head>
            <title>Code Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
            <BigTitle text="Code Portfolio"/>
          <LanguagesAndProjects/>
        </div>
      )
}