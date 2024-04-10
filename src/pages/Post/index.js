import './Post.module.css';

import { useParams, Routes, Route } from "react-router-dom"
import posts from "json/posts.json";
import PostModel from "componentes/PostModel";
import ReactMarkdown from "react-markdown";
import NotFound from 'pages/NotFound';
import MainTemplate from 'componentes/MainTemplate';
import Recommended from 'componentes/Recommended';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NotFound/>;
    }

    return (
        <Routes>
            <Route path='*' element={<MainTemplate/>}>
                <Route index element={
                    <>
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
                        <Recommended postId={post.id}/>
                    </>
                } />
            </Route>
        </Routes>
    )
}