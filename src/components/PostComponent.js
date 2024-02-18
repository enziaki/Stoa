/* This post component takes the title and displays it in the sidebar
so that the articles can be indexed

Maybe I will add indexing in this component as well
*/
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';



function PostComponent() {


    const [posts, setPosts] = useState({});
    const getAllposts = async () => {

        const importAll = (r) => r.keys().map(r);
        const markdownFiles = importAll(require.context('../Articles', false, /\.md$/))
            .sort();
        // .reverse();
        const markdownLmao = (await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text()))))
        setPosts(markdownLmao);

    }

    useEffect(() => {
        getAllposts();
    }, [])
    return (
        <div className='PostComponent'>
            {posts && posts.map && posts.map((post, idx) => (
                <div className="post" key={idx}> {/* Use a unique key prop */}
                    <ReactMarkdown>
                        {post}
                    </ReactMarkdown>
                </div>
            ))}
        </div>
    )
}

export default PostComponent
