import { Post } from './Post'
import { Header } from './components/Header'

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Allan Moreto"
        content="lorLorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit eum officia unde, voluptate non corrupti cumque? Sapiente, quasi ipsa quis ut praesentium ipsam molestiae dolor vitae. Molestiae, incidunt consequatur!em"
      />
      <Post
        author="SIngletary"
        content="MOrem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit eum officia unde, voluptate non corrupti cumque? Sapiente, quasi ipsa quis ut praesentium ipsam molestiae dolor vitae. Molestiae, incidunt consequatur!em"
      />
    </div>

  )
}
