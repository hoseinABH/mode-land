import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  align-items: center;
  font-size: 16px;
  background-image: linear-gradient(90deg, #ff006e, #8338ec, #3a86ff);
  background-size: 100vw 10px;
  background-repeat: no-repeat;
  padding-top: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  @media screen and (max-width: 800px) {
    height: 90px;
    align-items: right;

    padding: 10px;
    margin-bottom: 20px;
    font-size: 13px;
    justify-content: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
