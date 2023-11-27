import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hools/useAuth";
import useAxousSecret from "../../Hools/useAxousSecret";
import useBought from "../../Hools/useBought";




const CheckoutForm = () => {
    const [clientSecret, setclientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [error, seterror] = useState()
    const [cards, refetch] = useBought();

    const axioussecret = useAxousSecret()
    const { user } = useAuth();
    const [teansactitonid, setteansactioid] = useState('');
    const navigate = useNavigate()

    console.log(cards)
    const totalprice = cards.reduce((total, item) => total + parseInt(item.price), 0)
    console.log(totalprice)
    useEffect(() => {
        if (totalprice > 0) {
            axioussecret.post('/create-payment-intent', { price: totalprice })
                .then(res => {
                    setclientSecret(res.data.clientSecret)


                })
        }
    }, [cards, totalprice])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
        if (!stripe || !elements) {

            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('payment error', error)
            seterror(error.message)
        } else {
            console.log("payment method", paymentMethod)
            seterror(" ")
        }
        const { paymentIntent, errror: conformerror } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email || "anonymous",
                    name: user.displayName || "anonymous"
                }
            }
        })
        if (conformerror) {
            console.log('conform error')
        } else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("teansactiton id", paymentIntent.id)
                setteansactioid(paymentIntent.id);

                //save user info and card all products------->
                const payment = {
                    email: user?.email,
                    price: totalprice,
                    transactionId: paymentIntent.id,
                    date: cards?.map(item => item.date),
                    cartIds: cards?.map(item => item._id),
                }
                const res = await axioussecret.post('/payments', payment);
                console.log("payment save", res.data)
                refetch()
                if (res.data.paymentResult.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Payment Successfully ',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/daseboard/bought')
                }

            }
        }
    }
    return (
        <form className="px-10" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                error && <p className="text-red-700">{error}</p>
            }
            {
                teansactitonid && <p className="text-green-600">Tan id:{teansactitonid}</p>
            }
            <div className=" text-center mt-10">
                <button className="btn btn-success btn-sm" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;