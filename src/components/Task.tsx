import { Check, Circle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps{
	finished?: boolean,
	taskDescription: string
}

export function Task({finished = false, taskDescription}: TaskProps){
	return(
		<div className={styles.task} >
			{finished ? (
				<button className={styles.checkboxMarked}>
					<Check size={12} />
				</button>
			) : (
				<button className={styles.checkbox}>
					<Circle size={12} />
				</button>
			)}
			<div className={styles.todoDescription}>
				<p className={finished ? styles.done : styles.todo}>{taskDescription}</p>
			</div>
			<button className={styles.deleteTodo}>
				<Trash size={20} />
			</button>
		</div>
	)
}