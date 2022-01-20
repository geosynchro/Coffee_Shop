import { useState } from 'react'

function ItemCard({name, id, price, description, category, image, user, addCartItem}){
    // const [cartData, setCartData] = useState({})

    // function handleAddCartItem(id){
    //     fetch('/carts', {
    //         method: 'POST',
    //         headers: {'Content-type':'application/json'},
    //         body: JSON.stringify(newCartItem)
    //     })
    //     .then(res => res.json())
    //     .then(newCartItem => {setCartItems([newCartItem, ...cartItems])})
    // }

    function handleClick(){
        addCartItem({
            "user_id" : user.id,
            "item_id" : id
        })
    }
    return(
        <div className="bg-gray-50/80 rounded-md">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="ml-1">
                <h3 className="mt-4 text-lg text-black  ">{name}</h3>
                <p className="mt-1 text-md text-black   ">{description}</p>
                <p className="mt-1 text-lg font-medium text-black   ">${price}</p>
                {user ? <div>
                <button onClick={() => handleClick()} className="mt-1 text-md text-black hover:text-amber-600 hover:underline">Add to cart</button>
                { user.is_admin ? <button className="mt-1 ml-3 text-md text-black hover:text-amber-600 hover:underline">Edit/Delete Item</button> : null}
                </div>
                :
                null}
              </div>
        </div>
    )
}

export default ItemCard