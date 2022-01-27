import EmptyCartPage from './EmptyCartPage'
import CartDisplayPage from './CartDisplayPage'



function ShoppingCart({user, deleteFromCart}) {
   
    return (
      <div> 
        {user ? 
        <CartDisplayPage user={user} deleteFromCart={deleteFromCart}/> 
        : 
        <EmptyCartPage />} 
      </div>


    )
  }

  export default ShoppingCart