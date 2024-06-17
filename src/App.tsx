import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <TodoList />
        </main>
      </div>
    </div>
  )
}

export default App

// And here's a good TODO list for this TODO app :-)
// 1. use Reduce instead of filter to remove/toggle tasks
// 2. let user rename a task
// 3. let user reorder tasks
// 4. prevent tasks with space only descs to be submitted
// 5. remove whitespaces from the beginning of the description
// 6. add pagination
// 7. add translations