import Heading from "../../GoolebalSecton/Heading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe('pk_test_51OEPdIHKytLp2A16Cjv5PQcXUgtdyiQTZKkFqjUbfZNy3VvtwbRpe73KoaH8CUUZSddMAFzeqVDXYShhdIgtVGWK00iRplvTmU');
    return (
        <div>
            <Heading title="payment"></Heading>
            <div>
                <Elements stripe={stripePromise}>
              <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;