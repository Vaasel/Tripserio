const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const stripe = require("stripe")(process.env.STRIPE_SERVER_KEY);
const jazzCash = require("../utils/jazzCashApi");
const axios = require("axios");

function paymentRoutes() {

    return {
        
        async stripe(req, res,next) {
            try {

                const { stripeToken , totalPrice ,paymentDesc} = req.body;
                if (!stripeToken) {
                    throw new ErrorHandler("token must be provided", 400);
                }
                
                if (!totalPrice || !paymentDesc) {
                    throw new ErrorHandler("Please provide price and description", 400);
                }


                // customer = await stripe.customers.create(
                //     {   name:'John Doe',
                //         email:'john@example.com',
                //         source: stripeToken
                //     }
                // )
                
                await stripe.charges.create({
                    amount: totalPrice * 100 ,
                    description: paymentDesc,
                    source: stripeToken,
                    currency: process.env.STRIPE_CURRENCY,
                    // customer : customer.id
                })
               
               successHandler(res,200,"payment successful")
                
            } catch (error) {
                next(error)
            }
          
        }
        ,

        async jazzcash(req, res, next) {
            try {
                const { amount, mobileNumber, cnic, desc } = req.body;
                if (!amount || !mobileNumber || !cnic || !desc) {
                    throw new ErrorHandler("Please fill all fields",400)
                }
                let data = await jazzCash.getDetails(amount, mobileNumber, cnic, desc);

                let response = await fetch(process.env.JAZZCASH_POST_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(data)
                })

                let result = await response.json();
                 successHandler(res,200,result)
            } catch (error) {
              next(error)
            }
        }
    }
}

module.exports = paymentRoutes;