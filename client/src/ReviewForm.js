import {useState} from 'react'

function ReviewForm({user, item_id, reviewSubmit}){
    const [formData, setFormData] = useState({
        user_id: user.id,
        item_id: item_id,
        rating: "",
        review_text: ""
    })

    function handleSubmit(e){
        e.preventDefault()
        reviewSubmit(formData)
    }

    function handleChange(e){
        // setFormData({
        //     user_id: user.id,
        //     item_id: item_id,
        //     rating: parseInt(e.target.value),
        //     review_text: e.target.value
        // })
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return(
        <div className='mt-4'>
            <form onSubmit={handleSubmit}>
                <input className="w-96   appearance-none ml-2 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" onChange={handleChange} name="review_text" value={formData.review_text} type="text" placeholder="Write Review Here..."/>
                <select className=' mt-2 appearance-none ml-2 w-48 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm' onChange={handleChange} name="rating">
                    <option>Select a rating...</option>
                    <option value={1} >1 / 5</option>
                    <option value={2} >2 / 5</option>
                    <option value={3} >3 / 5</option>
                    <option value={4} >4 / 5</option>
                    <option value={5} >5 / 5</option>
                </select>
                <button type="submit" className="bg-amber-500 ml-16 rounded-md text-white hover:bg-amber-800 py-1 px-1 shadow-sm shadow-gray-300 ml-2 rounded-lgs">Submit</button>
            </form>
        </div>
    )
}

export default ReviewForm