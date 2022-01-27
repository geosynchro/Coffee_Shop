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
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <input className="mx-2 my-2 w-56 border-2 border-gray-200" name="comment_text" value={formData.comment_text} onChange={handleChange} placeholder="Leave a comment.."/>
        //         <button type="submit" className="bg-gray-100 rounded-md px-1 py-1 shadow-md shadow-gray-300">submit</button>
        //     </form>
        // </div>

        <div className='mt-4'>
        <form onSubmit={handleSubmit}>
            <input className="w-96   appearance-none ml-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" onChange={handleChange} name="review_text" value={formData.review_text} type="text" placeholder="Write Comment Here..."/>
            <div className='flex justify-center'>

            <button type="submit" className="bg-amber-500 mt-4 rounded-md text-white hover:bg-amber-800 py-1 px-1 shadow-sm shadow-gray-300 ml-2 rounded-lgs">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default CommentForm