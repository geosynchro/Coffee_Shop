import { useState } from 'react'
import ItemReview from './ItemReview'
import ReviewForm from './ReviewForm'


function ViewItem({itemView, reviews, user, reviewSubmit}){
    // const [reviews, setReviews] = useState(false)
    const [reviewForm, setReviewForm] = useState(false)
  
    const reviewsDisplay = reviews.map(r => <ItemReview key={r.id} id={r.id} rating={r.rating} text={r.review_text} user={r.user}/>)

    function displayReviews(){
        setReviewForm((prev) => !prev)
    }

    return(
    <div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 content-center">
            <img src={itemView.image_url} alt={itemView.name} className="mx-auto  h-5/12 w-5/12 rounded-lg shadow-md shadow-black"/>
        </div>
        <div className="border-t border-gray-200">
            <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Item Name:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemView.name}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Description:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemView.description}</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Price:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${itemView.price}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Average Rating:</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> 4/5  <button  className="bg-gray-200 rounded-md px-1 py-1 ml-4 shadow-md shadow-gray-500 border-1 border-black">View Reviews</button></dd>
            </div>


            </dl>
        </div>
        </div>
        <div className='mx-auto'>
            <button className='mx-auto bg-gray-200 px-1 py-1 mt-2 rounded-md shadow-sm shadow-gray-400' onClick={displayReviews}>Leave a Review</button>
        </div>
        <div>
            {reviewForm ? <ReviewForm item_id={itemView.id} user={user} reviewSubmit={reviewSubmit}/> : null}
        </div>
        <div>
             {reviewsDisplay}
        </div>
    </div>
  )
}

export default ViewItem