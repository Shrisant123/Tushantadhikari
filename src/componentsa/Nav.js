import React, { Component } from 'react';
import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    let nav = ["Home", "About", "Blogs", "Contact"];
    let navbar = nav.map((ele) => {
      if (ele === "Home") {
        return <li className={styles.lis}><NavLink to="/" activeStyle={{fontWeight: "bold", color: "red"}} exact className={styles.link}>{ele}</NavLink></li>
      }
      if (ele ==="About") {
        return <li className={styles.lis}><Link to="/about"  className={styles.link}>{ele}</Link></li>
      }
      if (ele === "Blogs") {
        return <li className={styles.lis}><Link to="/blogs"  className={styles.link}>{ele}</Link></li>
      }
      if (ele === "Contact") {
        return <li className={styles.lis}><Link to="/contact"  className={styles.link}>{ele}</Link></li>
      }
      return null;
    })
    return (
      <div>
        <div className={styles.nav}>
          <h1 className={styles.logo}>Tushant Adhikari</h1>
          <ul className={styles.uls}>
            {navbar}
          </ul>
        </div>
      </div>
    )
  }
}








