// src/components/PayPalPayment.jsx
import { useEffect, useRef } from 'react';

const PayPalPayment = ({ course, onSuccess, onError }) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: course.price || "49.99"
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            onSuccess(course.id);
          }).catch(function(err) {
            onError(err);
          });
        },
        onError: function(err) {
          onError(err);
        }
      }).render(paypalRef.current);
    } else {
      console.error('PayPal SDK not loaded');
    }
  }, [course, onSuccess, onError]);

  return <div ref={paypalRef}></div>;
};

export default PayPalPayment;