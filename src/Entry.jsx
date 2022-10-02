import React from 'react';
import styles from './styles/Home.module.css';
import Header from './components/Home/header';
// import Signup from './Routes/signup'
// import Login from './components/login';

// import { Routes,Route } from 'react-router-dom';
// import Routeing from './Routeing'
import { Link } from 'react-router-dom';




function Entry() {
  return (

    <div className='w-full bg-gray-50'>
      <Header />

      {/* <Routes>
        <Route path="/signup" element={<Signup/>}/>
      </Routes> */}
    
    
      <main className={styles.main}>
        <center>
          This is home <br />
          <Link to="/dashboard">
            <button className='bg-red-500 mt-5 rounded-md py-1 px-5 text-lg text-white'>Dashboard</button>

          </Link>
        </center>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://artizence.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Artizence
        </Link>
      </footer>
    </div>
  )
}
export default Entry;
