import { loadStripe } from '@stripe/stripe-js';

const setupStripe = async () => {
    try {
        const stripe = await loadStripe('pk_test_51Ni344Iji6k2hBIxEImdWfWrlly2DGJMTLWqBLwkbB2KnJZKNyt9lGKuWi5H5ocnoET1nV3S9UdziaBYM8dxvkFG009xCQC8bi');
           
        return stripe;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default setupStripe;
