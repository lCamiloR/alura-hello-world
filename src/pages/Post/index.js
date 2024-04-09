import './Post.module.css';

import { useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModel from "componentes/PostModel";
import ReactMarkdown from "react-markdown";
import NotFound from 'pages/NotFound';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NotFound/>;
    }

    return (
        <PostModel
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
            
        </PostModel>
    )
}