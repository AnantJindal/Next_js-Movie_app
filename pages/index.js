import styles from '../styles/Home.module.css'
import Navbar from './components/Header/Header'
import SignIn from './mainpaths/SignIn/SignIn'
import 'react-toastify/dist/ReactToastify.css';
import Home1 from './mainpaths/Home/Home';
import 'antd/dist/antd.css';
import MovieDetails from './mainpaths/MovieDetails/MovieDetails';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <SignIn/>
      {/* <Home1/> */}
      {/* <MovieDetails/> */}
    </div>
  )
}
