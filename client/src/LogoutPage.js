import CoffeeLogo from './assets/coffeelogo.svg'

function LogoutPage(){
    return(
        <div className='mt-12'>
        <img
          className="mx-auto h-12 w-auto"
          src={CoffeeLogo}
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Account logged out</h2>

        

      </div>
    )
}

export default LogoutPage