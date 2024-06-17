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
