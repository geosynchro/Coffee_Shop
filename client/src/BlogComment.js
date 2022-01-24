

function BlogComment({id, text, username}){
    return(
        <div className="bg-gray-200 w-1/2 mx-3 my-3 px-2 py-2 rounded-lg shadow-md shadow-gray-400">
            <p>{text}</p>
            <p>comment made by: {username}</p>
        </div>
    )
}

export default BlogComment