import ThemeToggle from "../ThemeToggle";
import { Link } from 'react-router'
import './TopBar.css'

export default function TopBar({isDark, setIsDark, toPage}){
    return(
        <div className="top-bar">
            <div>
                Logo
            </div>
            <div className="options-top-bar">
                <Link className="top-bar-link" to='/home' onClick={toPage('home')}>Home</Link>
                <Link className="top-bar-link" to='/projects' onClick={toPage('projects')}>Projects</Link>
                <Link className="top-bar-link" to='/contact' onClick={toPage('contact')}>Contact</Link>
                <Link className="top-bar-link" to='/about' onClick={toPage('about')}>About this site</Link>
                <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>
            </div>
        </div>
    )
}