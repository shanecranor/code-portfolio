import Link from 'next/link';
const navbarLinks = {
    "Home" : "https://shane.cranor.org",
    "Music" : "https://soundcloud.com/shane_cranor",
    "Art" : "https://shane.cranor.org",
    "Photos" : "https://shane.cranor.org/Photos/index.html",
}
export default function Navbar(){
    return (
    <nav className="navbar-container"> 
        {Object.entries(navbarLinks).map( ([text, url]) => (
        <Link href={url}><a className="nav-link">{text}</a></Link>
        ))}
    </nav>
    )
}