
import { useState } from 'react'
import ItemReview from './ItemReview'
import ReviewForm from './ReviewForm'
import { Link } from 'react-router-dom'

function ItemEditPage(itemView, reviews, user, reviewSubmit){

    console.log(itemView)

    return (
        <div className='bg-coffee7 bg-auto h-screen overflow-auto  sm:rounded-lg'>
        <div className="">
            <div className="px-4 py-5 sm:px-6 content-center">
                <img src={itemView.image_url} alt={itemView.name} className="mx-auto   h-5/12 w-5/12 rounded-lg shadow-md shadow-black"/>
            </div>
            <div className='flex justify-center'>
                <div className=" w-1/2 border-2 border-amber-500 rounded-lg text-center">
                    <dl>
                        <div className="bg-gray-100/75 rounded-t-lg px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-md font-medium text-black text-right">Item Name:</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{itemView.name}</dd>
                        </div>
                        <div className="bg-gray-100/75 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-md font-medium text-black text-right">Description:</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{itemView.description}</dd>
                        </div>
                        <div className="bg-gray-100/75 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-md font-medium text-black text-right">Price:</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">${itemView.price}</dd>
                        </div>
                        {/* <div className="bg-gray-100/75 rounded-b-lg px-4  py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-md  font-medium text-black text-right">Average Rating:</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2"> {avgRating ? `${avgRating} / 5` : "No reviews yet" }  
                                { reviews.length > 0 ?
                                    <button  className="bg-amber-500 text-white rounded-md px-1 py-1 ml-6 shadow-md shadow-gray-500 border- border-black" onClick={displayReviews}>
                                    {showReviews ? "Hide Reviews" : "View Reviews"}
                                </button>  
                                :
                                null
                                } 
                                <button className='ml-6 bg-amber-500 text-white shadow-md shadow-gray-500 px-1 py-1 mt-2 rounded-md shadow-sm shadow-gray-400' onClick={leaveReviews}>Leave a Review</button>
                            </dd>
                        </div> */}
                    </dl>
                </div>
            </div>
        </div>

        {/* <div className='mx-auto'>
            <button className='mx-auto bg-gray-200 px-1 py-1 mt-2 rounded-md shadow-sm shadow-gray-400' onClick={leaveReviews}>Leave a Review</button>
        </div> */}
        {/* <div className='flex justify-center'>
        <div className='content-center'>
            {reviewForm ? (user ? <ReviewForm item_id={itemView.id} user={user} reviewSubmit={reviewSubmit}/> : <p className='text-xl bg-amber-500/75 rounded-lg py-2 px-2 my-4'><Link to="/login"><span className='hover:text-amber-700 underline cursor-pointer'>Login or create an account</span></Link> to leave a review!</p>) : null}
        </div>
        </div>
        <div className='mt-4'>
             {showReviews ? reviewsDisplay : null}
        </div> */}
    </div>
    )
}

export default ItemEditPage