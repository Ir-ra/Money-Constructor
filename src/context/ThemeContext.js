import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

//----------------------------------//
const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        default:
            return state;
    }
}
//----------------------------------//
export function ThemeProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        mode: 'light',
        color: '#effaf0'
    })

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}