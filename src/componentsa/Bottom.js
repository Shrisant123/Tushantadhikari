import React from "react";
import styles from './Bottoms.module.css';
function Bottom(){
    return(
        <div className={styles.bottom}>
		<div className={styles.all_par}>
            <p className={styles.p}>follow me on instagram</p>
            <p className={styles.p}>follow me on facebook</p>
            <p className={styles.p}>adhikaritushant@gmail.com</p>
            <p className={styles.p}>&copy copyright</p>
		</div>
        </div>
    )
}

export default Bottom;