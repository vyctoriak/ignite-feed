import { Header } from './components/Header';
import './styles.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <div><h1>heading 1</h1></div>
          <div><h1>heading 2</h1></div>
        </main>
      </div>
    </div>
  )
}

export default App
