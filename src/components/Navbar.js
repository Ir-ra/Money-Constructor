import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuth } from '../hooks/useAuth'
import { Fragment } from 'react'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
    const { logOut } = useLogout()
    const { user } = useAuth()
    const { color } = useTheme()

    return (
        <nav className={styles.navbar} style={{ background: color }}>
            <ul>
                <li className={styles.title}>myMoney</li>

                {!user && (
                    <Fragment>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signUp'>SignUp</Link></li>
                    </Fragment>
                )}

                {user && (
                    <Fragment>
                        <li>Hello, {user.displayName}</li>
                        <button className='btn' onClick={logOut}>Logout</button>
                    </Fragment>
                )}

            </ul>
        </nav>
    );
}

export default Navbar;