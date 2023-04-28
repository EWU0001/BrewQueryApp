import { useState, useEffect } from "react"
import './styling/ThemeSwitch.css';
import { BsFillSunFill } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';

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
                <Tooltip title="Switch Theme">
                    <label className="label">Switch Theme</label>
                </Tooltip>
                <BsFillSunFill color="default" onClick={toggleTheme} tabIndex={0} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    );
}
