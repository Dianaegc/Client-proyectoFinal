import React from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY="pk_test_51Jm2RpGqYdbg9X75rbvfWBvnLZKKxGGlbSWYVRsxbvoxetYTLSGbK4wf9MAEsdUPgWxXdRCHpM5jjmOm4xBn7Rhu00E7UrhVL6"
const stripeTestPromise=loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
        <PaymentForm/>
            
        </Elements>
    )
}
