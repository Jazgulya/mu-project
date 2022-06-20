import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { eventContext } from "../../contexts/eventContext";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  //photo, title, date, price, place
  const { getOneEvent, oneEvent, updateEvent } = useContext(eventContext);
  const { id } = useParams();
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();

  function handleValues() {
    let editedEvent = {
      photo,
      title,
      date,
      price,
      place,
    };
    if (
      !photo.trim() ||
      !title.trim() ||
      !date.trim() ||
      !price ||
      !place.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    updateEvent(id, editedEvent);
    navigate("/events");
  }
  useEffect(() => {
    getOneEvent(id);
  }, []);

  useEffect(() => {
    if (oneEvent) {
      setTitle(oneEvent.title);
      setPrice(oneEvent.price);
      setPhoto(oneEvent.photo);
      setPlace(oneEvent.place);
      setDate(oneEvent.date);
    }
  }, [oneEvent]);
  return oneEvent ? (
    <Container
      style={{
        marginTop: "50px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Редактировать событие</Typography>
      <TextField
        style={{ width: "350px" }}
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        label="Photo"
        color="secondary"
        focused
      />
      <TextField
        style={{ width: "350px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        color="secondary"
        focused
      />
      <TextField
        style={{ width: "350px" }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        label="Date"
        color="secondary"
        focused
      />
      <TextField
        style={{ width: "350px" }}
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        label="Price"
        color="secondary"
        focused
      />
      <TextField
        style={{ width: "350px" }}
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        label="Place"
        color="secondary"
        focused
      />
      <Button
        onClick={handleValues}
        color="secondary"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Сохранить изменения{" "}
      </Button>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
};

export default EditEvent;
