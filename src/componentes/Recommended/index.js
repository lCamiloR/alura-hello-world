import styles from './Recommended.module.css';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";

export default function Recommended({postId}) {
    let counter = 0;
    return (
        <div className={styles.recommended}>
            <h1>Outros posts que você pode gostar:</h1>
            <ul className={styles.posts}>
                {posts.map(post => {
                    if (counter < 4 && postId != post.id) {
                        counter++;
                        return(
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}