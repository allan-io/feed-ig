import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/allan-io.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Allan Moreto</strong>
                            <time title='11 de Maio as 11:13' dateTime="2022-05-11 00:23:12">1h ago</time>
                        </div>
                        <button title="Delete Comment">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Nice, congrats!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
