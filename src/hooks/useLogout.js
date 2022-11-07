import { useState } from "react"
import {projectAuth} from '../firebase/config'
import { useAuth } from "./useAuth"

export const useLogout = () => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch} = useAuth()

    const logOut = async () => {
        setError(null)
        setIsPending(true)

        //sign user OUT
        try {
            await projectAuth.signOut()

            //dispatcj logout action
            dispatch({type: 'LOGOUT'})

            setIsPending(false)
            setError(null)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }
    return {logOut, error, isPending}
}