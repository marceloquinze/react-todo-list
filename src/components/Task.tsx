import { Check, Circle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps{
	id: number,
	finished?: boolean,
	taskDescription: string,
	onDeleteTask: (taskIdtoDelete: number) => void,
	onToggleState: (taskIdtoToggle: number) => void
}

export function Task({
	id,
	finished = false,
	taskDescription,
	onDeleteTask,
	onToggleState
}: TaskProps){

	// Handles
	function handleDeleteTask(){
		onDeleteTask(id)
	}

	function handleToggleState(){
		onToggleState(id)
	}

	return(
		<div className={styles.task} >
			{/* {finished ? (
				<button className={styles.checkboxMarked}>
					<Check size={12} />
				</button>
			) : (
				<button className={styles.checkbox}>
					<Circle size={12} />
				</button>
			)} */}
			<button
				onClick={handleToggleState}
			>
				<Circle size={12} />
			</button>
			<div className={styles.todoDescription}>
				<p className={finished ? styles.done : styles.todo}>{taskDescription}</p>
			</div>
			<button
				onClick={handleDeleteTask}
				className={styles.deleteTodo}
			>
				<Trash size={20} />
			</button>
		</div>
	)
}