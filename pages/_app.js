
import './app.scss'
import '../style_modules/scrollbar.scss'
import '../components/Navbar/Navbar.scss' 
import '../components/BigTitle/BigTitle.scss'
import '../components/LanguagesAndProjects/LanguagesAndProjects.scss' 
import '../components/Project/Project.scss'
import '../components/About/About.scss';
import '../components/Section/Section.scss'
import '../components/ModalWindow/ModalWindow.scss'
import '../components/FeaturedProject/FeaturedProject.scss'
import './posts/posts.scss'
import Home from './index'
import Spotify from './posts/spotify'
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}