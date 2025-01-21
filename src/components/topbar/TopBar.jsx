import ThemeToggle from "../ThemeToggle";
import { Link } from 'react-router'
import './TopBar.css'
import { useEffect, useState } from "react";

export default function TopBar({isDark, setIsDark, toPage}){

    const [isOpen, setIsOpen] = useState(true)

    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            if(screen.width > 768){
                setIsOpen(true)
            }else{
                setIsOpen(false)
            }
        })
    }, [])

    function handleMenuBtn(){
        setIsOpen((isOpen)=>!isOpen)
    }

    return(
        <div className="top-bar">
            <div className="logo-top-bar">
                Logo
                <img src={isDark ? "menu_icon_dark.svg" : "/menu_icon.svg"} alt="Menu" onClick={handleMenuBtn} />
            </div>
            { isOpen &&
                (<div className="options-top-bar">
                    <Link className="top-bar-link" to='/' onClick={toPage('home')}>Home</Link>
                    <Link className="top-bar-link" to='/projects' onClick={toPage('projects')}>Projects</Link>
                    <Link className="top-bar-link" to='/contact' onClick={toPage('contact')}>Contact</Link>
                    <Link className="top-bar-link" to='/about' onClick={toPage('about')}>About this site</Link>
                    <ThemeToggle isDark={isDark} setIsDark={setIsDark}/>
                </div>)
            }
        </div>
    )
}