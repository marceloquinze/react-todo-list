import { Task } from './Task'
import styles from './TodoList.module.css'

export function TodoList(){
	return(
		<div className={styles.todoList}>

			<div className={styles.summary}>
				<div className={styles.createdTasks}>
				Created tasks <span>5</span>
				</div>
				<div className={styles.finishedTasks}>
				Finished <span>2 of 5</span>
				</div>
			</div>
			<Task finished />
			<Task />


		</div>
	)
}