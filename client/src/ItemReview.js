

function ItemReview({id, text, rating, user}){
    return(
        <div>
            {/* <p>{text}</p>
            <p>{rating}</p>
            <p>{user.username}</p> */}
            <div className='flex justify-center '>
                <div className=" w-1/2  rounded-lg text-center ">
                    <dl>
                        <div className="bg-gray-100/75 border-2 border-amber-500 rounded-lg my-2 px-4 py-5 ">
                            <p>{rating}/5</p>
                            <p className="text-lg">"{text}"</p>
                            <p className="text-sm">commented by: {user.username}</p>
                            {/* <dt className="text-md font-medium text-black text-right">{user.username} says:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{text}</dd> */}
                        </div>
                    </dl>
                </div>
        </div>
        </div>
    )
}

export default ItemReview