
function paymentRoutes(){

    return {
        
        async stripe(req, res) {
            res.send("stripe")
        }
    }
}

module.exports = paymentRoutes;