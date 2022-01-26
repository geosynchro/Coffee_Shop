

function BlogComment({id, text, username}){
    return(
        <div className="bg-gray-200  mx-3 my-3 px-2 py-2 rounded-lg shadow-sm shadow-gray-600">
            <p className="text-lg" > {text}</p>
            <p className="text-sm">posted by: <span className="underline">{username}</span></p>
        </div>
    )
}

export default BlogComment