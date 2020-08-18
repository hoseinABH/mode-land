import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  direction: rtl;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 15%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
  }
`;

export const TextContainer = styled.span`
  width: 15%;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  margin-left: 1.8rem;
  @media screen and (max-width: 800px) {
    margin-left: 0.4rem;
  }
`;
