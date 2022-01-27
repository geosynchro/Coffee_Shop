import { Link } from 'react-router-dom'
import { useState } from 'react'
import EmptyUserCart from './EmptyUserCart'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect } from 'react'


function CartDisplayPage({user, deleteFromCart}){
    const [checkout, setCheckout] = useState(false)
    const cartItems = user.carts
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    console.log(cartItems.length)

    function handleCheckoutClick(){
      setCheckout((prev) => !prev)
    }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });
        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }


    };

    const cardStyle = {
      style: {
          base: {
            
              color: "#32325d",
              fontFamily: 'Arial, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                  color: "#32325d"
              }
          },
          invalid: {
              color: "#fa755a",
              iconColor: "#fa755a"
          }
      }
  };

    useEffect(() => {
        fetch("/payment")
            .then(res => res.json())
            .then(data => setClientSecret(data.client_secret))
    }, [])

    const handleChange = async (event) => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
  };
 
    
  
    
    return(
      <div className='flex justify-center mt-8'>
        <div className="flex flex-col">
        { cartItems.length > 0 ?
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
                          {/* <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{cart.item.name}</div>
                            <div className="text-sm text-gray-500">{cart.item.description}</div>
                          </div> */}
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
                      <button onClick={() => handleCheckoutClick()} className="bg-amber-500 text-white rounded-md px-2 py-2 mx-2">Checkout</button>
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
        :
        <EmptyUserCart />}
        <div>
          { cartItems.length > 0 ?
          (checkout ? 
          <div className='flex justify-center'>
          <div className='w-96'>
            <form id="payment-form" className="border-2 py-2 px-2 mt-20" onSubmit={handleSubmit} >
            <input placeholder="First Name..." className='appearance-none mb-1  px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <input placeholder="Last Name..." className='ml-1 mb-1 appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <input placeholder="Address line 1..." className=' mb-1 appearance-none w-full block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <input placeholder="Address line 2..." className='mb-1 appearance-none w-full block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <input placeholder="City..." className=' mb-1 appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <input placeholder="ZipCode..." className=' w-1/4 ml-1 mb-1 appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm'></input>
            <select className="appearance-none px-3 w-20 ml-2  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm" >
                        <option value="all">State...</option>

            </select>
            <CardElement className='mt-1 border border-gray-300 rounded-md  py-2'  id="card-element" options={cardStyle} onChange={handleChange} />
            <button
                className='bg-amber-500 text-white rounded-md py-2 px-4 mt-2'
                disabled={processing || disabled || succeeded}
                id="submit"
            >
                <span id="button-text">
                    {processing ? (
                        <div className="cursor-progress" id="spinner">"Processing..."</div>
                    ) : (
                        "Pay now"
                    )}
                </span>
            </button>
            {/* Show any error that happens when processing the payment */}
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            {succeeded ?
                <p className="result-message">
                    Payment succeeded, see the result in your
                    <a
                        href={`https://dashboard.stripe.com/test/payments`}
                    >
                        {" "}
                        Stripe dashboard.
                    </a> Refresh the page to pay again.
                </p> : null}
        </form>
        </div>
        </div>
           : 
           null)
           : 
           null
           }
        </div>
      </div>
      </div>
    )
}

export default CartDisplayPage