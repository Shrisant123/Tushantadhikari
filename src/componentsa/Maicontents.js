import React from "react";
import styles from './Maincontent.module.css';
// import alex from '../alex.png'
function Maicontents() {
    return (
        <>
            <div className={styles.maincon}>
                {/* <img src={alex} alt="imagenotfound" className={styles.img}></img> */}
                <div className={styles.intro}>
                    <h1 className={styles.h1}>Hello I am Tushant Adhikari</h1>
                    <p className={styles.p}>Welcome to my Website</p>
                    <p className={styles.p}>Here you can find about me</p>
                </div>
            </div>
        </>
    )
}

export default Maicontents;
