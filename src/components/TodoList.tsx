import { EmptyList } from './EmptyList'
//import { AddTaskForm } from './AddTaskForm'
import { Task } from './Task'
import styles from './TodoList.module.css'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { AddTaskForm } from './AddTaskForm'

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

	// 4. What happens when we click on the trash icon?
	function deleteTask(taskIdtoDelete: number){
		const listWithoutDeletedTash = tasks.filter( item => {
			return item.id !== taskIdtoDelete
		})
		setTasks(listWithoutDeletedTash)
	}

	function toggleState(taskIdtoToggle: number){
		const updatedTasks = tasks.map( item => {
			if( item.id === taskIdtoToggle ){
				return { ...item, isFinished: !item.isFinished}
			}
			return item
		})
		setTasks(updatedTasks)
	}

	// Getting number of items in the todo list
	const numTasks = tasks.length;

	// Getting number of complete items in the todo list
	const numFinishedTasks = (tasks: Todo[]): number => tasks.filter(item => item.isFinished).length;

	return(
		<>
			<AddTaskForm
				// Pass values from this TodoList component to AddTaskForm using functions
				newTaskText={newTaskText}
				onCreateNewTask={handleCreateNewTask}
				onNewTaskChange={handleNewTaskChange}
				onNewTaskInvalid={handleNewTaskInvalid}
			/>
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
								id={item.id}
								finished={item.isFinished}
								taskDescription={item.taskDescription}
								onDeleteTask={deleteTask}
								onToggleState={toggleState}
							/>
						)
					})
				}

			</div>
		</>
	)
}