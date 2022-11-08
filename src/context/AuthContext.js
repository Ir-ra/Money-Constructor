import { createContext, useEffect, useReducer } from "react";
import { projectAuth} from "../firebase/config";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null}
        case 'AUTH_IS_READY':
            return { ...state, user: action.payload, authIsReady: true}
        default:
            return state;
    }
}

//making custom auth provider
export function AuthContextProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false    //це щоб браузер залишав залоганим як і на ФБ
    })

//Коли AuthContextProvider вперше прикріпляється, то викорстовємо нижче
    useEffect(()=>{
        const unsub = projectAuth.onAuthStateChanged((user) => {  //ця ф-я комунікую з ФБ, і каже йому хто і коли залоганий
            dispatch({type:'AUTH_IS_READY', payload: user})
            unsub()
        })
    },[])

console.log('AuthContext state:', state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}