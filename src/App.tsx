import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <AddTaskForm />
          <TodoList />
        </main>
      </div>
    </div>
  )
}

export default App
