import styles from './Home.module.css'
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList'
import {useAuth} from '../../hooks/useAuth'
import {useCollection} from '../../hooks/useCollection';


function Home() {
    const {user} = useAuth()
    const {documents, error} = useCollection(
        'transactions',
        ["uid", "==", user.uid],       //це типу оті query з useColl
        ['createdAt', 'desc'])
    

    return ( 
        <div className={styles.container}>
           
            <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <TransactionList transactions={documents} />}
            </div>

            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>

        </div>
     );
}

export default Home;