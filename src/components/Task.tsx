import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface TaskProps{
	finished?: boolean
}

export function Task({finished = false}: TaskProps){
	return(
		<div className={styles.task} >
			{finished ? (
				<button className={styles.checkboxMarked}>
					<CheckCircle size={20} />
				</button>
			) : (
				<button className={styles.checkbox}>
					<Circle size={20} />
				</button>
			)}
			<div className={styles.todoDescription}>
				<p className={finished ? styles.done : styles.todo}>Integer ur na interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
			</div>
			<button className={styles.deleteTodo}>
				<Trash size={20} />
			</button>
		</div>
	)
}