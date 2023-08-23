"use client"
import React, { MouseEvent, useEffect, useState } from 'react';
import setupStripe from "./stripe";
import { Stripe, StripeCardElement } from '@stripe/stripe-js/types/stripe-js';
import axios from "axios"

type stripeDetails = {
    card: null | StripeCardElement,
    stripe: null | Stripe
}

const Page = () => {
    let [stripeDetails, setStripeDetails] = useState<stripeDetails>({
        card: null,
        stripe: null
    })

    function submitHandler(e: MouseEvent) {
        e.preventDefault();
        const { card, stripe } = stripeDetails;
        if (card) {
            stripe?.createToken(card).then((result) => {
                console.log(result)
            })

        }
    }

    useEffect(() => {
        async function initializeStripe() {
            const stripe = await setupStripe();
            if (stripe) {
                const elements = stripe.elements();
                const card = elements.create("card", { style: {}, hidePostalCode: true });
                card.mount("#card-element");
                setStripeDetails({
                    card,
                    stripe
                })

            }
        }



        initializeStripe();
    }, []);



    return (
        <div>
            <h1>User Information Form</h1>
            <form id="userForm">
                {/* ...form fields */}
                <label htmlFor="phoneNumber">Card </label>
                <div id="card-element"></div>
                <button type="submit" onClick={(e) => submitHandler(e)}>Submit</button>
            </form>
        </div>
    );
}

export default Page;
