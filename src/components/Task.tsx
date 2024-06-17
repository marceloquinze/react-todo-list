import { Check, Circle, Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps{
	id: number;
	finished?: boolean;
	taskDescription: string;
	createdAt: Date;
	onDeleteTask: (taskIdtoDelete: number) => void;
	onToggleState: (taskIdtoToggle: number) => void
}

export function Task({
	id,
	finished = false,
	taskDescription,
	createdAt,
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
			<button
				onClick={handleToggleState}
				className={finished ? styles.checkboxMarked : styles.checkbox}
			>
				{ finished ? (
					<Check size={12} />
				) : (
					<Circle size={12} />
				)}
			</button>
			<div className={styles.todoDescription}>
				<p className={finished ? styles.done : styles.todo}>{taskDescription}</p>
			</div>
			<div className={styles.date}>
				<p className={finished ? styles.done : styles.todo}>{`${createdAt.toLocaleDateString()} at ${createdAt.toLocaleTimeString()}`}</p>
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