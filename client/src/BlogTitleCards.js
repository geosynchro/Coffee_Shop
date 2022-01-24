
import {Link} from 'react-router-dom'

function BlogTitleCards({ id, user, title, viewBlogPage}){

    function handleBlogClick(id){
        viewBlogPage(id)
    }

    return(
        <div>
            <Link to="/viewblog">
                <div onClick={() => handleBlogClick(id)} className=" bg-gray-200 my-2 mx-2 px-2 py-2 border-2 border-red-200 ">
                    <h1>{title}</h1>
                    <h2>Author: {user.username}</h2>
                </div>
            </Link>
        </div>
    )
}

export default BlogTitleCards