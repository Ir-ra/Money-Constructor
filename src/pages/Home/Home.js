import styles from './Home.module.css'
import TransactionForm from './TransactionForm';
import {useAuth} from '../../hooks/useAuth'

function Home() {
    const {user} = useAuth()
    return ( 
        <div className={styles.container}>
           
            <div className={styles.content}>
                transaction div
            </div>

            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>

        </div>
     );
}

export default Home;