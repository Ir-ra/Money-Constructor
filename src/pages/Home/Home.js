import styles from './Home.module.css'
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList'
import { useAuth } from '../../hooks/useAuth'
import { useCollection } from '../../hooks/useCollection';


function Home() {
  const { user } = useAuth()
  const { documents, error } = useCollection(
    'transactions',
    ["uid", "==", user.uid],
    ['createdAt', 'desc'])

  const totalAmount = documents && documents.reduce((a, b) => a + parseInt(b.amount), 0);


  return (
    <div className={styles.container}>

      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>

      <p className={styles.total}>Total amount {`$${totalAmount}`}</p>
    </div>
  );
}

export default Home;
