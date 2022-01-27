
import BlogComments from './BlogComment'
import {useState, useEffect} from 'react'
import CommentForm from './CommentForm'
import { useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

function BlogPage({ user, commentSubmit}){
    const [commentForm, setCommentForm] = useState(false)
    const [blog, setBlog] = useState(null)

    // console.log(user)
    const {id} = useParams()

    useEffect(() => {

            fetch(`/blogs/${id}`)
            .then(res => res.json())
            .then(res => {
              setBlog(res)
            })
          }, [])
    
    const comments = blog?.comments.map(comment => <BlogComments key={comment.id} id={comment.id} text={comment.comment_text} username={comment.user.username}/>)

    function handleClick(){
        setCommentForm((prev) => !prev)
    }

    return(
        <>
        { blog && (<div className=' flex bg-coffee7 bg-auto h-screen overflow-auto'>
            <div>
            <div className="flex justify-center">
                <h1 className="text-2xl text-center mt-8 bg-amber-700 rounded-lg px-4 py-2 text-white font-lobster">{blog.title}</h1>
            </div>
            <div>
                <h2 className='text-center text-xl font-lobster mt-4 mb-6'>Written by: {blog.user.username}</h2>
            </div>
            <div className='flex bg-amber-800/75 border-2 border-amber-700 rounded-lg mx-80'>
                <p className='text-lg py-4 px-4 text-white '>{blog.blog_text}</p>
            </div>
            <div className='flex justify-center'>
                <div className="">
                    <div className='container'>
                    <button onClick={handleClick} className=" container mt-6 bg-amber-700 text-white rounded-md px-2 py-1">{commentForm ? "Hide Comment Form" : "Leave a comment?"} </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                    {commentForm ?  (user ? <CommentForm blog_id={blog.id} user_id={user.id} commentSubmit={commentSubmit}/> : <p className='text-lg bg-gray-100/75 rounded-md border border-amber-500 py-1 px-2'>Please <Link to="/login"><span className='underlined hover:cursor:pointer hover:text-amber-500 underline'>login or create an account</span></Link> to leave a comment.</p>) : null}

            </div>
                    <h1 className='text-center mt-4 text-2xl font-lobster'>Comments:</h1>
                    {comments }
            </div>
        </div>  )    
        }
        </>
         
    )
}

export default BlogPage