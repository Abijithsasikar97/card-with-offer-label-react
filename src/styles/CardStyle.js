import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(255, 255, 255);
  max-width: 400px;
  padding-top: 13px;
  margin: 50px auto 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(37 117 252 / 20%) 0px 2px 20px 0px;
`;

export const PriceDetails = styled.div`
  padding: 15px 0px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OfferTimer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 8px;
    color: #444;
  }

  .timer small {
    font-size: 9px;
    text-transform: uppercase;
    font-family: sans-serif;
  }

  .timer span {
    font-size: 3em;
    font-weight: bold;
    font-family: serif;
  }
`;

export const Pricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .year {
    font-size: 14px;
    margin-left: 4px;
    font-weight: normal;
  }
`;

export const OfferLabel = styled.div`
  position: absolute;
  top: 22px;
  right: -32px;
  display: block;
  font-size: 14px;
  color: #333;
  background: rgb(106, 206, 129);
  font-weight: bold;
  padding: 3px 35px;
  box-sizing: border-box;
  transform: rotate(45deg);
  box-shadow: rgb(37 117 252 / 10%) 0px 2px 30px 0px;
`;

export const Header2 = styled.h2`
  text-align: center;
  margin: 10px 0px;
  font-size: 20px !important;
  font-weight: 400 !important;

  .currency {
    font-size: 14px;
    position: relative;
    top: -8px;
  }
`;

export const StrikLine = styled.hr`
  margin: 0px auto;
  width: 114px;
  border: 1px solid rgb(111, 111, 111);
  transform: rotate(10deg);
  position: relative;
  top: -15px;
`;

export const OfferPrice = styled.h2`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 36px !important;
`;

export const OfferCurrency = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 3px;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: bolder;
  border: 1px;
  cursor: pointer;
  font-family: Nunito, sans-serif;
  color: rgb(255, 255, 255);
  border-radius: 28px;
  background: #ff0000;
  padding: 10px 20px;
  position: relative;
  min-width: 160px;
  transition: background-color 300ms ease-out 0s;
`;
