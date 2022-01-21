import { Link } from 'react-router-dom'

function CartDisplayPage({user, deleteFromCart}){


    const cartItems = user.carts
    
    return(
        <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((cart) => (
                    <tr key={cart.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={cart.item.image_url} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{cart.item.name}</div>
                            <div className="text-sm text-gray-500">{cart.item.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{cart.item.description}</div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${cart.item.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                       <button type="button" className=" bg-red-500 text-white px-2 py-2 rounded-md" onClick={() => deleteFromCart(cart.id)}> Remove From Cart</button>
                      
                    </td>
                    </tr>
                  ))}
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                    
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                    >
                      Total : $ {cartItems.reduce((a,v) => a = a + v.item.price, 0)}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <button className="bg-amber-500 text-white rounded-md px-2 py-2 mx-2">Checkout</button>
                      <span> or </span>
                      <Link to ='/products'>
                      <button className="bg-amber-500 text-white rounded-md px-2 py-2 ml-2 ">Keep Shopping</button>
                      </Link>
                    
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartDisplayPage