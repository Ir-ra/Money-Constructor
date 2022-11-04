import { useState } from "react"
import {projectAuth} from '../firebase/config'
import { useAuth } from "./useAuth"

export const useSignUp = () => {
    // const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch} = useAuth()

    const signUp = async(email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //sign up user
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user) // це буде щойно створений юзер
       
            if(!response){
                throw new Error('Could not complete signup')
            }

            //upd add displayName
            await response.user.updateProfile({displayName: displayName})

            //dispatch login action
            dispatch({type: 'LOGIN', payload: response.user})

            setIsPending(false)
            setError(null)

        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    }
    return {error, isPending, signUp}
}