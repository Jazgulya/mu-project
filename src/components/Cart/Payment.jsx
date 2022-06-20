// import { Typography, Container, TextField, Button } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "react-use-cart";

// const Payment = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardDate, setCardDate] = useState("");
//   const [cardCvv, setCardCvv] = useState("");
//   const { cartTotal } = useCart();
//   const navigate = useNavigate();
//   return (
//     <Container
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         margin: "50px",
//         alignItems: "center",
//       }}
//     >
//       <Typography
//         style={{ marginTop: "40px", fontWeight: "800px" }}
//         variant="h4"
//       >
//         Реквизиты платежа
//       </Typography>
//       <img
//         width={"350px"}
//         height={"300px"}
//         src="https://cliply.co/wp-content/uploads/2019/08/371908930_CREDIT_CARD_400px.gif"
//       />
//       <TextField
//         style={{ width: "350px", margin: "10px" }}
//         value={cardNumber}
//         name="number"
//         onChange={(e) => setCardNumber(e.target.value)}
//         label="Введите номер карты"
//         color="secondary"
//         placeholder="Card Number"
//         type="tel"
//         focused
//       />
//       <TextField
//         style={{ width: "350px", margin: "10px" }}
//         value={cardDate}
//         onChange={(e) => setCardDate(e.target.value)}
//         label="Срок окончания действия карты"
//         placeholder="22/22"
//         color="secondary"
//         focused
//       />
//       <TextField
//         style={{ width: "350px", margin: "10px" }}
//         value={cardCvv}
//         onChange={(e) => setCardCvv(e.target.value)}
//         label="CVV"
//         placeholder="222"
//         color="secondary"
//         focused
//       />
// <Typography> Итого: {cartTotal} </Typography>
// <Button
//   color="secondary"
//   variant="contained"
//   onClick={() => {
//     alert("Поздравляем! Оплата прошла успешно!");
//     navigate("/events");
//   }}
// >
//   Оплатить сейчас
// </Button>
//     </Container>
//   );
// };

// export default Payment;

import React, { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Payment = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const navigate = useNavigate();
  const { cartTotal } = useCart();
  return (
    <div>
      <Box style={{ marginTop: "90px" }}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Box>

      <form
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          // style={{ width: "350px", margin: "10px" }}
          value={number}
          name="number"
          onChange={(e) => setNumber(e.target.value)}
          // label="Введите номер карты"
          // color="secondary"
          placeholder="Card Number"
          type="tel"
          onFocus={(e) => setFocus(e.target.name)}
        />
        <TextField
          // style={{ width: "350px", margin: "10px" }}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          // label="Введите номер карты"
          // color="secondary"
          placeholder="Name"
          type="text"
          onFocus={(e) => setFocus(e.target.name)}
        />
        <TextField
          // style={{ width: "350px", margin: "10px" }}
          value={expiry}
          name="expiry"
          onChange={(e) => setExpiry(e.target.value)}
          // label="Введите номер карты"
          // color="secondary"
          placeholder="MM/YY Expiry"
          type="text"
          onFocus={(e) => setFocus(e.target.name)}
        />
        <TextField
          // style={{ width: "350px", margin: "10px" }}
          value={cvc}
          name="cvc"
          onChange={(e) => setCvc(e.target.value)}
          // label="Введите номер карты"
          // color="secondary"
          placeholder="cvc"
          type="tel"
          onFocus={(e) => setFocus(e.target.name)}
        />
        <Typography> Итого: {cartTotal} </Typography>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            if (!number || !name.trim() || !expiry || !cvc) {
              alert("Заполните все поля!");
            } else {
              alert("Поздравляем! Оплата прошла успешно!");
              navigate("/events");
            }
          }}
        >
          Оплатить сейчас
        </Button>
      </form>
    </div>
  );
};

export default Payment;
