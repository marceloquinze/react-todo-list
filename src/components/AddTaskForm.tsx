import { PlusCircle } from '@phosphor-icons/react'
import styles from './AddTaskForm.module.css'
import { FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface AddTaskForm{
	newTaskText: string;
	onCreateNewTask: (e: FormEvent) => void;
	onNewTaskChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	onNewTaskInvalid: (e: InvalidEvent<HTMLTextAreaElement>) => void
}

export function AddTaskForm({
	onCreateNewTask,
	onNewTaskChange,
	onNewTaskInvalid,
	newTaskText
}: AddTaskForm){
	return(
		<form onSubmit={onCreateNewTask} className={styles.form}>
			<input
				type="text"
				value={newTaskText}
				placeholder='Add a new task'
				onChange={onNewTaskChange}
				required
				onInvalid={onNewTaskInvalid}
			/>
			<button type="submit">Create <PlusCircle size={24} /></button>
		</form>
	)
}