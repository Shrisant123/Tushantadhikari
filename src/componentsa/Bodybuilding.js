import React, {Component} from 'react';
import styles from './Game.module.css'
export default class Bodybuilding extends Component {
	render(){
		return(
			<>
				<div className={styles.all}>
					<h1 className={styles.h1}>Fitness</h1>
					<img src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=woman-doing-exercise-inside-gym-2247179.jpg&fm=jpg"  alt="imagenotfound" className={styles.imgs}/>
					<p className={styles.p}>Fitness refers to the ability to perform daily activities with optimal performance, endurance, and strength. It involves five main components: cardiorespiratory, muscular, muscular endurance, body composition, and flexibility. Regular exercise can improve each component and prevent some conditions. Fitness is more about the state of the body than physical activity and exercise. It is the quality of being suitable for someone or something.If you are interested in learning more about fitness, you can visit Medical News Today, Merriam-Webster, or Cambridge Dictionary. If you are looking for exercises, nutrition, supplements, and sports-related </p>
				</div>
			</>
		)
	}
}

