import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {

    console.log(props)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/allan-io.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Allan Moreto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio as 11:13' dateTime="2022-05-11 00:23:12">Posted 1h ago</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=""> jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{'  '}
                    <a href="#">#nlw</a>{'  '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Leave your Comment</strong>
                <textarea
                    placeholder="Leave a Comment"
                />
                <footer>
                    <button type="submit">Post</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

    )
}
