import './ThemeToggle.css'

export default function ThemeToggle({isDark, setIsDark}){

    function handleSetIsDark(){
        localStorage.setItem("theme", !isDark)
        setIsDark(!isDark)
    }

    return (
        <div className='theme-toggle'>
            <img src="/light_icon.svg" alt="Light" />
            <input
                id='themeToggle'
                type='checkbox'
                className='toggle-input'
                onChange={handleSetIsDark}
                checked={isDark}
            />
            <label className='toggle-label' htmlFor="themeToggle"><img src="/dark_icon.svg" alt="Dark" /></label>
        </div>
    );
}