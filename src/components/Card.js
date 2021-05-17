import React, { useState, useEffect } from "react";
import {
  CardDiv,
  PriceDetails,
  OfferTimer,
  Pricing,
  OfferLabel,
  Header2,
  StrikLine,
  OfferPrice,
  OfferCurrency,
  Button,
} from "../styles/CardStyle";

const Timer = ({ label, n }) => (
  <div className="timer">
    <small>{label}</small>
    <span>{n < 10 ? "0" + n : n}</span>
  </div>
);

export const Card = () => {
  const [secondsLeft, setSecondsLeft] = useState(86403);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsLeft == 0) {
        clearInterval(interval);
        console.log("Times up!");
      } else {
        setSecondsLeft(secondsLeft - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  const days = Math.floor(secondsLeft / 24 / 60 / 60);
  const hoursLeft = Math.floor(secondsLeft - days * 86400);
  const hours = Math.floor(hoursLeft / 3600);
  const minutesLeft = Math.floor(hoursLeft - hours * 3600);
  const minutes = Math.floor(minutesLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <CardDiv>
      <PriceDetails>
        <OfferTimer>
          <Timer label="Days" n={days} />
          <Timer label="Hours" n={hours} />
          <Timer label="Minutes" n={minutes} />
          <Timer label="Seconds" n={seconds} />
        </OfferTimer>
        <Pricing>
          <OfferLabel>Save 50%</OfferLabel>
          <Header2>
            <span className="currency">₹</span>
            <span style={{ marginLeft: "2px" }}>10000</span>
            <span className="year">/ year</span>
            <StrikLine></StrikLine>
          </Header2>
          <OfferPrice>
            <div style={{ margin: "0px" }}>
              <OfferCurrency>
                <p style={{ margin: "0px", color: "#ccc" }}>₹ INR</p>
              </OfferCurrency>
            </div>
            <span
              style={{
                margin: "3px 3px 3px 8px",
                fontWeight: "bold",
                color: "#444",
              }}
            >
              5000
            </span>
            <span className="year">/ year</span>
          </OfferPrice>
          <Button>Buy Now</Button>
        </Pricing>
      </PriceDetails>
    </CardDiv>
  );
};

export default Card;
