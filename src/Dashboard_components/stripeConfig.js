// stripeConfig.js
import { loadStripe } from '@stripe/stripe-js';

// Replace with your own Stripe publishable key
const stripePromise = loadStripe('pk_test_51OMCJ5GGpPEu3EZaq9z83BHINnE1raVJZeMV2PqWz7q4l7JQuKFkvsdmoTFAWWvX1EUWLMTJQDmuX9mzJaTUxOPN00gRPrIilY');

export default stripePromise;
