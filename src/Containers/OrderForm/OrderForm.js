import React, { Component } from "react";
// import { Route } from 'react-router-dom';
// import styles from "./OrderForm.module.css";
import Button from "../../Components/UI/Button/Button";
import styled from "styled-components";
import Input from "../../Components/UI/Input /Input";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  box-shadow: 1px 2px 3px #ccc;
`;

class OrderForm extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postal: ""
    }
  };

  render() {
    return (
      <Wrapper>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <Input
          inputtype="input"
          type="text"
          name="steet"
          placeholder="Your Sreet"
        />
        <Input
          inputtype="input"
          type="text"
          name="postal"
          placeholder="Your Postal Code"
        />
        <Button btntype="success">ORDER</Button>
      </Wrapper>
    );
  }
}

export default OrderForm;
