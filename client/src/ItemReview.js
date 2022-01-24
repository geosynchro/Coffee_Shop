

function ItemReview({id, text, rating, user}){
    return(
        <div>
            <p>{text}</p>
            <p>{rating}</p>
            <p>{user.username}</p>
          
        </div>
    )
}

export default ItemReview