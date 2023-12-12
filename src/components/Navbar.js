import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuth } from '../hooks/useAuth'
import { Fragment } from 'react'

function Navbar() {
    const { logOut } = useLogout()
    const { user } = useAuth()

    return (
        <nav className={styles.navbar}>
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
