import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer className="container">
    <CheckoutHeaderContainer className="text-center">
      <HeaderBlockContainer>
        <span>محصول</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>توضیحات</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>تعداد</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>قیمت</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>حذف</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>جمع کل:{total}هزار تومان </TotalContainer>

    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
