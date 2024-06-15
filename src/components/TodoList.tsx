import { Task } from './Task'
import styles from './TodoList.module.css'
import { v4 as uuidv4 } from 'uuid'

interface Todo{
	id: number,
	isFinished: boolean,
	taskDescription: string
}

const todos: Todo[] = [
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

// Getting number of items in the todo list
const numTasks = todos.length;

// Getting number of complete items in the todo list
const numFinishedTasks = (todos: Todo[]): number => todos.filter(todo => todo.isFinished).length;

export function TodoList(){
	return(
		<div className={styles.todoList}>

			<div className={styles.summary}>
				<div className={styles.createdTasks}>
				Created tasks <span>{numTasks}</span>
				</div>
				<div className={styles.finishedTasks}>
				Finished <span>{`${numFinishedTasks(todos)} of ${numTasks}`}</span>
				</div>
			</div>
			{ todos.map( todo =>{
				return(
					<Task
						key={todo.id}
						finished={todo.isFinished}
						taskDescription={todo.taskDescription}
					/>
				)
			})}

		</div>
	)
}