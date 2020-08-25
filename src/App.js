import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import DropdownElement from "./components/DropdownElement.jsx";

const OrderPanel = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  h2 {
    color: #145374;
  }
`;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  margin: 1rem 3rem 1rem 0;

  background: #e8e8e8;
  box-shadow: 0px 2px 4px rgba(0, 51, 78, 0.1);

  flex: 0 0 auto;

  border-radius: 10px;

  transition: all 0.2s;

  :hover {
    box-shadow: 0px 10px 6px rgba(20, 83, 116, 0.2);
    transform: translateY(-10px);
  }

  /*Selected */
  border: ${({ selected }) => (selected === true ? "2px solid #145374" : "")};
  .select-indicator {
    z-index: 10;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;

    background: #f6f5f5;
    bottom: 10px;
    right: 10px;

    display: flex;
    place-content: center;

    ::after {
      position: absolute;
      top: 3px;

      content: "";
      width: 24px;
      height: 24px;
      border-radius: 100%;
      background: ${({ selected }) => (selected === true ? " #145374" : "")};
    }
  }
`;

const InfoPanel = styled.div`
  z-index: 200;
  position: fixed;
  width: 300px;
  height: 100vh;
  padding: 1rem;
  background: #00334e;
  color: #f6f5f5;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: auto;
    bottom: 0;
  }
`;

const OrderButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 0;

  margin: 2rem 0 2rem 0;
  padding: 1rem 2rem 1rem 2rem;
  background: #ee5757;
  color: #f6f5f5;
  border-radius: 60px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  /* remove button styles */
  outline: none;
  border: none;

  transition: all 0.2s;

  i {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    margin: 2rem 0 0.5rem 0;
    position: relative;
    right: 0;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.2);
  }
`;

function App() {
  const [cardSelected, setCardSelected] = useState(1);
  const [color, setColor] = useState("red");

  // Helper for checking which card is selected based on the index of the
  // card and the value of the cardSelected state
  // Helps with the styling of the selected card
  function checkCardSelected(card) {
    if (card === cardSelected) {
      return true;
    } else {
      return false;
    }
  }

  const carModels = [
    { name: "Neo Speedster", price: 15000 },
    { name: "Behtony Lagoon", price: 4000 },
    { name: "Kelz Hatchback", price: 20000 },
    { name: "Kron Roadster", price: 8000 },
  ];

  return (
    <div className="App">
      <OrderPanel>
        <h2>Model</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "auto",
          }}
        >
          {carModels.map((model, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                placeContent: "center",
                textAlign: "center",
              }}
            >
              <Card
                selected={checkCardSelected(index + 1)}
                onClick={() => setCardSelected(index + 1)}
              >
                <div className="select-indicator" />
              </Card>
              <p
                className="model-label"
                style={{
                  marginTop: "1rem",
                  marginBottom: "2rem",
                  paddingRight: "3rem",
                }}
              >
                {model.name}
              </p>
            </div>
          ))}
        </div>
        <h2>Color</h2>
        <DropdownElement
          dropdownLabel=""
          options={["red", "silver", "navy", "black"]}
        />
      </OrderPanel>
      <InfoPanel>
        <h1>{carModels[cardSelected - 1].name}</h1>
        <p>Price:${carModels[cardSelected - 1].price}</p>
        <OrderButton>
          <i className="fas fa-shopping-cart"></i>
          Place Order
        </OrderButton>
      </InfoPanel>
    </div>
  );
}

export default App;
