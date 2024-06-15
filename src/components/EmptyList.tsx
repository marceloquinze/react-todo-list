import styles from './EmptyList.module.css'
import clipboard from '../assets/clipboard.svg'

export function EmptyList(){
	return(
		<div className={styles.emptyList}>
			<img src={clipboard} alt="No new tasks logo" />
			<h2>You don't have any task at the moment</h2>
			<p>Create your tasks and organize your todo list</p>
		</div>
	)
}