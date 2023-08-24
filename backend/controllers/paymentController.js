const successHandler = require("../utils/successHandler");
const ErrorHandler = require("../utils/ErrorHandler");
const stripe = require("stripe")(process.env.STRIPE_SERVER_KEY);
const jazzCash = require("../utils/jazzCashApi");
const axios = require("axios");

function paymentRoutes() {

    return {
        
        async stripe(req, res,next) {
            try {

                const { stripeToken , totalPrice } = req.body;
                if (!stripeToken) {
                    throw new ErrorHandler("token must be provided", 400);
                }
                
                if (!totalPrice) {
                    throw new ErrorHandler("enter valid price", 400);
                }
                
                const res = await stripe.charges.create({
                    amount: totalPrice * 100 ,
                    description: `product price`,
                    source: stripeToken,
                    currency:"inr"
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
                let data = jazzCash.getDetails(amount, mobileNumber, cnic, desc);



                // res.send(data)
                console.log(process.env.JAZZCASH_POST_URL);
                console.log(data)
                let response = await fetch(process.env.JAZZCASH_POST_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(data)
                })

                let result = await response.json();
                // let response = await axios.post("https://sandbox.jazzcash.com.pk/ApplicationAPI/API/Payment/DoTransaction",data)
                // console.log(result)
                 successHandler(res,200,result)
            } catch (error) {
              next(error)
            }
        }
    }
}

module.exports = paymentRoutes;