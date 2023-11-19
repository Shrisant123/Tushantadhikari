import React, { Component } from 'react'
import styles from './Passions.module.css'
import virat from '../virat.jpeg';
export default class Passion extends Component {
  render() {
    return (
      <div>
        <div className={styles.hby_main} >
          <div className={styles.img_container}>
            <img src={virat} alt='imagenotseenduetosomeproblem' className={styles.imgs} />
          </div>
          <div className={styles.all_para}>
            <h1 className={styles.h1}>Cricket is My Hobby</h1>
            <div className={styles.paragraphs}>
              <p className={styles.p}>I am very much eager about cricket. I started playing cricket since childhood.</p>
              <p className={styles.p}>I used to play cricket with my friends by lying with my parents. I have to play</p>
              <p className={styles.p}>cricket with my brother at home. We left more than 100 cricket ball when playing.</p>
			  <p className={styles.p}>Cricket is a sport that has numerous health benefits. It is a great form of exercise</p>
			  <p className={styles.p}>that can help improve your stamina, endurance, balance, and hand-eye coordination 12.</p>
			  <p className={styles.p}> Playing cricket regularly can also help build muscle strength and improve overall fitness</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
