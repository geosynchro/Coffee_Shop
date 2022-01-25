import CoffeeLogo from './assets/coffeelogo.svg'

function EmptyUserCart(){
    return(
        <div className='mt-12'>
        <img
          className="mx-auto h-12 w-auto"
          src={CoffeeLogo}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your cart is empty!</h2>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">To add items to your cart,</h2>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">check out our current products.</h2>

        

      </div>
    )
}

export default EmptyUserCart