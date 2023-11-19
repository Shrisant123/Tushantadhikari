import React, { Component } from 'react';
import styles from './Businesses.module.css';
import tushant from './tushant.jpg';
export default class Business extends Component {
    render() {
        return (
            <div>
                <div className={styles.hby_main}>
                    <div className={styles.img_container}>
                        <img src={tushant} alt='imagewhere' className={styles.imgs} />
                    </div>
                    <div className={styles.all_para}>
                        <h1>My aim in future</h1>
                        <div className={styles.paragraphs}>
                            <p className={styles.p}>When I was child I wanted to became a doctor but when I was growing up.</p>
                            <p className={styles.p}>My mindset changed to become a businessman. One of the main reason to</p>
                            <p className={styles.p}>become a businessman is for freedom and not working under the pressure </p>
                            <p className={styles.p}>of any person.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




