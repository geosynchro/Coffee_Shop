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
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="review_text" value={formData.review_text} type="text" placeholder="Write Review Here..."/>
                <select onChange={handleChange} name="rating">
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={5} >5</option>
                </select>
                <button type="submit" className="bg-gray-100 py-1 px-1 shadow-sm shadow-gray-300 ml-2 rounded-lgs">submit</button>
            </form>
        </div>
    )
}

export default ReviewForm