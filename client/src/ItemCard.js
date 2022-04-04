import { Link } from 'react-router-dom'
import { useState } from 'react'

function ItemCard({name, id, price, description, category, image, user, addCartItem, viewItemPage}){
  const [inCart, setInCart] = useState(false)
    
    function handleClick(){
        addCartItem({
            "user_id" : user.id,
            "item_id" : id
        })
        setInCart((prev) => !prev)
    }

    function handleAlert(){
      alert('Please Login or Create an account to add items into your cart')
    }

    function handleDisplayItem(id){
        viewItemPage(id)
    }
    return(
        <div className="bg-gray-50/80 rounded-md shadow-sm shadow-gray-400 ">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={image}
                  alt={name}
                  className=" w-full h-full object-center object-cover group-hover:opacity-75"
                  style={{height:"213px", width:"320px"}}
                />
              </div>
              
              <div className="ml-1">
                <h3 className="mt-4 text-lg text-black  ">{name}</h3>
                <p className="mt-1 text-md text-black   ">{description}</p>
                <p className="mt-1 text-lg font-medium text-black   ">${price}</p>
                <div className="flex justify-center ">
                    <Link to="/viewitem">    
                    <button onClick={() => handleDisplayItem(id)} className="flex mt-1 mr-1 bg-amber-500 px-1 py-1 rounded-md mb-2 text-md text-white hover:text-amber-800 hover:underline">View Details</button>
                    </Link>
                  <div>
                    <div>
                      {inCart ? 
                        <p className=' bg-amber-500 text-white py-1 px-2 mt-1 rounded-md'>Item in cart</p> 
                      // <button onClick={ user ? () => handleClick() : () => handleAlert()} className="flex mt-1 mr-1 bg-amber-500 px-1 py-1 rounded-md mb-2 text-md text-white hover:text-amber-800 hover:underline">Remove from cart</button>
                      :
                      <button onClick={ user ? () => handleClick() : () => handleAlert()} className="flex mt-1 mr-1 bg-amber-500 px-1 py-1 rounded-md mb-2 text-md text-white hover:text-amber-800 hover:underline">Add to cart</button>
                      }
                    </div>
                  </div>
                </div>

                <div>
                    {user ? (user.is_admin ?  <Link to="/itemedit"><button onClick={() => handleDisplayItem(id)} className="flex mx-auto mt-1 bg-amber-500 px-1 py-1 rounded-md mb-2 text-md text-white hover:text-amber-800 hover:underline">Edit/Delete Item</button></Link> : null) : null }
                </div>

              </div>
        </div>
    )
}

export default ItemCard