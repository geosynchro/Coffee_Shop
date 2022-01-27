

function BlogComment({id, text, username}){
    return(
        // <div className="bg-gray-200  mx-3 my-3 px-2 py-2 rounded-lg shadow-sm shadow-gray-600">
        //     <p className="text-lg" > {text}</p>
        //     <p className="text-sm">posted by: <span className="underline">{username}</span></p>
        // </div>
            <div>
                <div className='flex justify-center '>
                    <div className=" w-1/2  rounded-lg text-center ">
                        <dl>
                            <div className="bg-gray-100/75 border-2 border-amber-500 rounded-lg my-2 px-4 py-5 ">
                                <p className="text-lg">"{text}"</p>
                                <p className="text-sm">commented by: {username}</p>
                                {/* <dt className="text-md font-medium text-black text-right">{user.username} says:</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{text}</dd> */}
                            </div>
                        </dl>
                    </div>
            </div>
            </div>
    )
}

export default BlogComment