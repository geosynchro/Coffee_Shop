import { useState } from 'react'

function CommentForm({user_id, blog_id, commentSubmit}){
    const [formData, setFormData] = useState({
        user_id: user_id,
        blog_id: blog_id,
        comment_text: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        commentSubmit(formData)
        e.currentTarget.reset()
    }

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className="mx-2 my-2 border-2 border-gray-200" name="comment_text" value={formData.comment_text} onChange={handleChange} placeholder="Leave a comment.."/>
                <button type="submit" className="bg-gray-100 rounded-md px-1 py-1 shadow-md shadow-gray-300">submit</button>
            </form>
        </div>
    )
}

export default CommentForm