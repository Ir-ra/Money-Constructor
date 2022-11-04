import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>myMoney</li>

                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signUp'>SignUp</Link></li>
            </ul>
        </nav>
     );
}

export default Navbar;