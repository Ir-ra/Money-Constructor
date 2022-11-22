import styles from './SignUp.module.css'

import { useState } from 'react';
import { useSignUp } from '../../hooks/useSignUp'

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const { error, isPending, signUp } = useSignUp()

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp(email, password, displayName)
    }

    return (
        <form className={styles['signup-form']} onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <label>
                <span>email:</span>
                <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            <label>
                <span>password:</span>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>

            <label>
                <span>display name:</span>
                <input
                    type='text'
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                />
            </label>

            {!isPending && <button className='btn'>Sign Up</button>}
            {isPending && <button className='btn' disabled>...</button>}
            {error && <p>{error}</p>}
        </form>
    );
}
export default SignUp;