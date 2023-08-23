const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const stripe = require("stripe")(process.env.STRIPE_SERVER_KEY);

function paymentRoutes() {

    return {
        
        async stripe(req, res,next) {
            try {

                    const { stripeToken } = req.body;
                    if (!stripeToken) {
                        throw new ErrorHandler("Token must be provided", 400);
                }
                
                const res = await stripe.charges.create({
                    amount: 500 * 100 ,
                    description: `product price`,
                    source: stripeToken,
                    currency:"inr"
                })
               
               successHandler(res,200,"payment successful")
                
            } catch (error) {
                next(error)
            }
          
        }
    }
}

module.exports = paymentRoutes;