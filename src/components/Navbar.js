import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'

function Navbar() {
    const {logOut} = useLogout()

    return ( 
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>

                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signUp'>SignUp</Link></li>

                <li className='btn' onClick={logOut}>Logout</li>
            </ul>
        </nav>
     );
}

export default Navbar;