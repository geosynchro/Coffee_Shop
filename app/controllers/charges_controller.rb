

class ChargesController < ApplicationController

        def payment
        
               items = @user.carts.items.map()
               
               thing = items.inject(0){|sum,e| sum + e.price }
        
               
                 
                payment_intent = Stripe::PaymentIntent.create({
                    amount: thing * 100,
                    currency: 'usd',
                    payment_method_types: ['card'],
                  })
                  
                  render json: {
                    client_secret: payment_intent.client_secret
                  }
            
        

    end
end
