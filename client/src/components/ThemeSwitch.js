import { useState, useEffect } from "react"
import './styling/ThemeSwitch.css';
import Switch from '@mui/material/Switch';

export function ThemeSwitch() {
    const [theme, setTheme] = useState('dark'); //using useState hook to track current theme
    const toggleTheme = () => {  //add a toggle button
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => { //using useEffect hook to update theme
        document.body.className = theme;
    }, [theme])
    return (
        <div className={`ThemeSwitch ${theme}`}>
            <div className="switch">
                <label className="label">Switch Theme</label>
                <Switch color="default" onClick={toggleTheme} />
            </div>
        </div>
    );
}
