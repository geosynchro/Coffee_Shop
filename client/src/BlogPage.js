
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
        <div className=' flex justify-center bg-coffee7 bg-fixed h-full'>
            <div>
            <div className="flex justify-center">
                <h1 className="text-2xl text-center mt-8 bg-amber-800 rounded-lg px-4 py-2 text-white font-lobster">{blog.title}</h1>
            </div>
            <div>
                <h2 className='text-center text-xl font-lobster mt-4 mb-6'>Written by: {blog.user.username}</h2>
            </div>
            <div className='flex bg-amber-800/75 rounded-lg mx-80'>
                <p className='text-lg py-4 px-4 text-white '>{blog.blog_text}</p>
            </div>
            <div className='flex justify-center'>
                <div className="">
                    <div className='container'>
                    <button onClick={handleClick} className=" container mt-6 bg-amber-800 text-white rounded-md px-2 py-1">leave a comment</button>
                    {commentForm ?  (user ? <CommentForm blog_id={blog.id} user_id={user.id} commentSubmit={commentSubmit}/> : <p>Please Login to your account to leave a comment</p>) : null}
                    </div>
                    <h1 className='text-center text-2xl font-lobster'>Comments:</h1>
                    {comments }
                </div>
            </div>
            </div>
        </div>       
    )
}

export default BlogPage