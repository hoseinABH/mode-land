import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';

  const onToken = (token) => {
    console.log(token);
    alert('پرداخت موفق!');
  };

  return (
    <StripeCheckout
      label="پرداخت از درگاه اینترنتی"
      name="فروشگاه مدلند"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={` تومان ${price} جمع کل قیمت `}
      amount={priceForStripe}
      panelLabel="همین حالا پرداخت کن"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
