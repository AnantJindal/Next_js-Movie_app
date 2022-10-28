import styles from '../styles/Home.module.css'
import SignIn from './mainpaths/SignIn/SignIn'
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <SignIn/>
    </div>
  )
}
