import { useState, useEffect } from "react"
import './styling/ThemeSwitch.css';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Tooltip from '@mui/material/Tooltip';

export function ThemeSwitch() {
    const [theme, setTheme] = useState('Dark'); // store current theme in useState
    const [themeIcon, setThemeIcon] = useState(<DarkModeIcon/>);
    
    const toggleTheme = () => {  // toggle button for switch theme
        setTheme((prevTheme)=>prevTheme === 'Light'?'Dark':'Light');
    };

    useEffect(() => { //  wrapped theme in useEffect 
        document.body.className = theme;
        setThemeIcon(theme === 'Light' ? <LightModeIcon/> : <DarkModeIcon/>);
    }, [theme]);

    return (
        <div className="switch">
            <Tooltip title="Switch Theme">
                <label className="label">{theme}</label>
            </Tooltip>
            <label color="default" onClick={toggleTheme} tabIndex={0} style={{ cursor: 'pointer' }}>
                {themeIcon}
            </label>
        </div>
    );
}
