import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  min-height: 90vh;
  display: flex;
  direction: rtl;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 26px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;
