import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
          author="Allan Moreto"
          content="lorLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit eum officia unde, voluptate non corrupti cumque? Sapiente, quasi ipsa quis ut praesentium ipsam molestiae dolor vitae. Molestiae, incidunt consequatur!em"
         />
          <Post
            author="SIngletary"
            content="MOrem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit eum officia unde, voluptate non corrupti cumque? Sapiente, quasi ipsa quis ut praesentium ipsam molestiae dolor vitae. Molestiae, incidunt consequatur!em"
          />
        </main>
      </div>
    </div>

  )
}
