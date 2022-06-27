import React, { createContext, useContext, useState } from 'react';

const StateContext= createContext();

const initialState= {
    chat: false, //chatbox currently open or close
    cart: false, //cart
    userProfile: false, 
    notification: false,
}

export const ContextProvider= ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked ] = useState(initialState);
    const handleClick= (clicked) => {setIsClicked({...initialState, [clicked]:true})}
    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        console.log(e.target.value);
        setCurrentMode(e.target.value ); 
        localStorage.setItem('themeMode', e.target.value);
    }

    const setColor = (e) => {
        console.log(e);
        setCurrentColor(e); 
        localStorage.setItem('colorMode', e);
        setThemeSettings(false);    
    }

    return (
        <StateContext.Provider
            value= {{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu, //we can reduce this just by adding single word of activeMenu since key and value are the same
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setCurrentColor,
                setCurrentMode,
                themeSettings,
                setThemeSettings,
                setColor,
                setMode,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext= () => useContext(StateContext);