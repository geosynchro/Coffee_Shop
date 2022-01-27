import CoffeeLogo from './assets/coffeelogo.svg'
import {Link} from 'react-router-dom'

function EmptyCartPage(){
    return(
      <div className=''>

        <div className='mt-12'>
        <img
          className="mx-auto h-12 w-auto"
          src={CoffeeLogo}
          alt="Workflow"
          />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your cart is empty!</h2>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">To add items to your cart,</h2>
        <Link to="/login">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 underline hover:text-amber-700 cursor-pointer">please login or create an account.</h2>
        </Link>

        

      </div>
      </div>
    )
}

export default EmptyCartPage