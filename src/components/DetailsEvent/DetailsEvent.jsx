import React, { useContext, useEffect } from "react";
import { eventContext } from "../../contexts/eventContext";
import { useParams } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Container } from "@mui/material";
import { useCart } from "react-use-cart";
import { FcLeave } from "react-icons/fc";
import Rating from "../Rating/Rating";

export default function DetailsEvent() {
  const { addItem } = useCart();
  const { getOneEvent, oneEvent } = useContext(eventContext);
  const { id } = useParams();

  useEffect(() => {
    getOneEvent(id);
  }, []);
  console.log(oneEvent);

  return oneEvent ? (
    <Container>
      <Typography
        style={{ textAlign: "center", marginTop: "90px", marginBottom: "30px" }}
        variant="h4"
      >
        {oneEvent.title}{" "}
      </Typography>
      <Box style={{ display: "flex" }}>
        <img component="img" width="50%" src={oneEvent.photo} alt="Фото" />
        <Box style={{ marginLeft: "15px" }}>
          <FcLeave size={42} />
          <div>{oneEvent.date}</div>
          <div style={{ marginTop: "20px" }}>
            <LocationOnIcon /> {oneEvent.place}
          </div>
          <div style={{ marginTop: "20px" }}>
            <CurrencyRubleIcon /> {oneEvent.price}
          </div>
          <Box
            style={{
              marginTop: "15px",
              marginLeft: "-30px",
            }}
          >
            <Rating />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ marginTop: "15px" }}
              variant="contained"
              color="success"
              onClick={() => addItem(oneEvent)}
            >
              Добавить в корзину
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
}
