
import {Link} from 'react-router-dom'

function BlogTitleCards({ id, user, title, viewBlogPage}){

    // function handleBlogClick(id){
    //     viewBlogPage(id)
    // }

    return(
        <div>
            <Link to={`/viewblog/${id}`}>
                <div  className=" bg-amber-800/75 my-6 text-white rounded-lg mx-2 px-2 py-2 ">
                    <h1 className='text-center text-xl'>{title}</h1>
                    <h2 className='text-center text-lg'>Written by: {user.username}</h2>
                </div>
            </Link>
        </div>
    )
}

export default BlogTitleCards