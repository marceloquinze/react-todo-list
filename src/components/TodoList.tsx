import { EmptyList } from './EmptyList'
//import { AddTaskForm } from './AddTaskForm'
import { PlusCircle } from '@phosphor-icons/react'
import { Task } from './Task'
import styles from './TodoList.module.css'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface Todo{
	id: number,
	isFinished: boolean,
	taskDescription: string
}

const initialTodos: Todo[] = [
	{
		id: uuidv4(),
		isFinished: false,
		taskDescription: 'Integer ur na interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
	},
	{
		id: uuidv4(),
		isFinished: false,
		taskDescription: 'Task 2 Integer ur na interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
	},
	{
		id: uuidv4(),
		isFinished: true,
		taskDescription: 'Task 3 Integer ur na interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
	}
]

export function TodoList(){

	// States
	// 1. General Task State
	const [tasks, setTasks] = useState<Todo[]>(initialTodos);
	// 2. State that stores the input text content temporarily
	const [newTaskText, setNewTaskText] = useState('')

	// Handles
	// 1. What happens when we click the create button? (source: onSubmit)
	function handleCreateNewTask(e: FormEvent){
		e.preventDefault()
		const newTask: Todo = {
			id: uuidv4(),
			isFinished: false,
			taskDescription: newTaskText
		};
		setTasks([...tasks, newTask])
		setNewTaskText('')
	}

	// 2. What happens with the input text content? (source: onChange)
	// Acts while the user is inputting some value
	function handleNewTaskChange(e: ChangeEvent<HTMLTextAreaElement>){
		e.target.setCustomValidity("")
		setNewTaskText(e.target.value)
	}

	// 3. What happens when the input is empty?
	function handleNewTaskInvalid(e: InvalidEvent<HTMLTextAreaElement>){
		e.target.setCustomValidity("This field is required")
	}

	// Getting number of items in the todo list
	const numTasks = tasks.length;

	// Getting number of complete items in the todo list
	const numFinishedTasks = (tasks: Todo[]): number => tasks.filter(item => item.isFinished).length;

	return(
		<>
		<form onSubmit={handleCreateNewTask} className={styles.form}>
			<input
			type="text"
			value={newTaskText}
			placeholder='Add a new task'
			onChange={handleNewTaskChange}
			required
			onInvalid={handleNewTaskInvalid}
			 />
			<button type="submit">Create <PlusCircle size={24} /></button>
		</form>
		<div className={styles.todoList}>

			<div className={styles.summary}>
				<div className={styles.createdTasks}>
				Created tasks <span>{numTasks}</span>
				</div>
				<div className={styles.finishedTasks}>
				Finished
					<span>
						{ numTasks === 0 ? `0` : `${numFinishedTasks(tasks)} of ${numTasks}` }
					</span>
				</div>
			</div>
			{
				numTasks === 0 ? <EmptyList /> :
				tasks.map( item =>{
					return(
						<Task
							key={item.id}
							finished={item.isFinished}
							taskDescription={item.taskDescription}
						/>
					)
				})
			}

		</div>
		</>

	)
}