import React from 'react'
import styles from './BookNow.module.css'
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className={styles.centerit}>
       <h1 className={styles.head1}>Welcome to our website</h1>
       <button className={styles.button1}><Link to="/booking" className={styles.navLink}>Book Now</Link></button>
    </div>
  )
}

export default BookNow
