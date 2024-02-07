import React, {Component} from 'react';
import styles from './Game.module.css';
export default class Games extends Component {
	render(){
		return(
			<>
				<div className={styles.all}>
					<h1 className={styles.h1}>Importance of playing games</h1>
					<img src="https://th.bing.com/th/id/OIP._TtkNmnZdNSzjOpPRm1KPgHaE8?rs=1&pid=ImgDetMain" alt="imagenotfound" className={styles.imgs}/>
					<p className={styles.p}>Playing games can have several benefits. According to a study, playing video games can improve memory and attention as well as memory power, better eyesight, and train you to multitask. Games are also essential for healthy development in early childhood and beyond. Play lets children practice what they know and what they don’t, experiment through trial and error, find solutions to problems, work out the best strategies, and build new confidence and skills . In addition play , can improve children’s abilities to plan, organize, get along with others, regulate emotions, and cope with stress.</p> 
				</div>
			</>
		)
	}
}

