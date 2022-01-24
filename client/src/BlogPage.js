
import BlogComments from './BlogComment'
import {useState} from 'react'
import CommentForm from './CommentForm'

function BlogPage({blog, user, commentSubmit}){
    const [commentForm, setCommentForm] = useState(false)

    console.log(blog)
    // console.log(user)
    const comments = blog.comments?.map(comment => <BlogComments key={comment.id} id={comment.id} text={comment.comment_text} username={comment.user.username}/>)

    function handleClick(){
        setCommentForm((prev) => !prev)
    }

    return(
        <div>
            <div>
                <h1 className="text-xl">{blog.title}</h1>
            </div>
            <div>
                {/* <h2>Written by: {blog.user.username}</h2> */}
            </div>
            <div>
                <p>{blog.blog_text}</p>
            </div>
            <div className="mt-10">
                <button onClick={handleClick} className=" bg-amber-400 rounded-md px-1 py-1 ">leave a comment</button>
                {commentForm ? <CommentForm blog_id={blog.id} user_id={user.id} commentSubmit={commentSubmit}/> : null}
                <h1>comments:</h1>
            {comments }
            </div>
        </div>       
    )
}

export default BlogPage