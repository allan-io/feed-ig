import { Post } from './components/Post'
import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/allan-io.png',
      name: 'Allan Moreto',
      role: 'freelance dev'
    },
    content: [
      { type: 'paragraph', content: 'what is going on everyone!!' },
      { type: 'paragraph', content: 'this is not how things are done in real life' },
      { type: 'link', content: 'allan.moretodev' }
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/HeyMichelle.png',
      name: 'Michelle',
      role: 'junior dev'
    },
    content: [
      { type: 'paragraph', content: 'I do not find this to be correct' },
      { type: 'paragraph', content: 'the word excellent does not begin to describe this!' },
      { type: 'link', content: 'comehere' }
    ],
    publishedAt: new Date('2023-05-04 22:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}
