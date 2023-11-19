import React, { Component } from 'react'
import pushup2 from '../pushup2.jpg'
import styles from './Hobbys.module.css'
import Fitness from './Bodybuilding';
export default class Hobby extends Component {
    render() {
        return (
            <>
                <div className={styles.hby_main}>
                    <div className={styles.img_container}>
                        <img src={pushup2} alt='noimagefound' className={styles.imgs} />
                    </div>
                    <div className={styles.all_para}>
                        <h1 className={styles.h1}>MY passion Bodybuilding</h1>
                        <div className={styles.paragraphs}>
                            <p className={styles.p}>Bodybuilding is my passion.I started to do pushups and pullups at my early age.</p>
                            <p className={styles.p}>The passion of Bodybuilding comes from by seeing my brother who used to do </p>
                            <p className={styles.p}>pushups, pullups and running at his early age.So, lets talk about Bodybuilding</p>
                            <p className={styles.p}>Bodybuilding is a form of exercise that involves lifting weights and performing</p>
                            <p className={styles.p}>resistance training to build muscle mass and strength. It is a popular activity </p>
                            <p className={styles.p}>among people who want to improve their physical appearance, increase their stren-</p>
                            <p className={styles.p}>gth, and enhance their overall health and fitness.</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
