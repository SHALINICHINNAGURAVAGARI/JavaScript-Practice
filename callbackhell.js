const cart=["shoes","sunglasses"];
api.createOrder(cart,function(){

    api.proceedToPayment(function(){

        api.showOrderSummary(function(){
            
            api.updateWallet()
        })
    })
})