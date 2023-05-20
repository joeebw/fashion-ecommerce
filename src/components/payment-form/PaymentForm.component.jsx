import { useSelector } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../buttons/Button.component';
import {selectCartTotal} from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/user/user.selector';
import { useState } from 'react';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment ,setIsProcessingPayment] = useState(false);

  async function paymentHandler(e) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }

  }

  return (
    <div className='flex flex-col justify-start  max-w-[500px] my-16'>
      <form 
        className='flex flex-col'
        onSubmit={paymentHandler}
        >
        <h5 className='text-xl sm:text-3xl mb-6 font-semibold'>Credit Card Payment</h5>
        <CardElement/>
        <Button 
          selectButton='inverted' 
          className='self-end mt-6 w-24 sm:w-40 text-xs sm:text-base'
          type='submit'
          disabled={isProcessingPayment}
        >
          Pay Now
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
