import React, { useContext, useState } from 'react';
import './ButtonBackground.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import BackgroundContext from '../../context/BackgroundContext';

const ButtonBackground = () => {
    const [theme, setTheme] = useState(false);
    const background = useContext(BackgroundContext);

    const toggleTheme = () => {
        setTheme(!theme);
        if(!theme) {
            document.body.style.background = "white";
            background(theme);
        } else {
            background(theme);
            document.body.style.background = "#252325";
        }
    }

    return (
        <div className={ !theme ? 'change-theme': 'change-theme active-theme'} 
            onClick={ toggleTheme }>
            <FontAwesomeIcon icon={faLightbulb}/>
        </div>
    );
};

export default ButtonBackground;