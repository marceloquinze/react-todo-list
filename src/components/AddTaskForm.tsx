import styles from './AddTaskForm.module.css'

export function AddTaskForm(){
	return(
		<form className={styles.form}>
			<input type="text" name="" id="" placeholder='Add a new task' />
			<button type="submit">Criar</button>
		</form>
	)
}