import styles from './Recommended.module.css';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";

export default function Recommended({postId}) {
    let filteredPosts = posts.filter(p => p.id != postId);
    filteredPosts.sort(function (a, b) {
        return a - b;
    });
    filteredPosts = filteredPosts.slice(0, 4);
    return (
        <div className={styles.recommended}>
            <h1>Outros posts que você pode gostar:</h1>
            <ul className={styles.posts}>
                {filteredPosts.map(post => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </div>
    )
}