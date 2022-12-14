import styles from './Login.module.css'

import { useState } from 'react';
import { useLogIn } from '../../hooks/useLogIn'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { logIn, error, isPending } = useLogIn()

    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(email, password)
    }

    return (
        <form className={styles['login-form']} onSubmit={handleSubmit}>
            <h2>Login</h2>

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

            {error && <p>{error}</p>}
            {!isPending && <button className='btn'>Login</button>}
            {isPending && <button className='btn' disabled>...</button>}
        </form>
    );
}

export default Login;