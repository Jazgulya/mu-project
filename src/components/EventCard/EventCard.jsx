import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { eventContext } from "../../contexts/eventContext";
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
import { authContext } from "../../contexts/authContext";

export default function EventCard({ item }) {
  const { deleteEvent } = React.useContext(eventContext);
  const { isAdmin } = React.useContext(authContext);
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: "35px",
        padding: "10px",
        border: "1px solid",
        boxShadow: "1px 2px 9px #F4AAB9",
      }}
      sx={{ maxWidth: 300 }}
      display="flex"
    >
      <CardHeader
        style={{ textAlign: "center", height: "50px" }}
        title={item.title}
      />
      <CardMedia
        style={{
          objectFit: "fill",
          boxShadow: "1px 2px 9px #F4AAB9",
          borderRadius: "10px",
        }}
        component="img"
        height="200"
        image={item.photo}
        alt="Photo"
      />
      <CardContent>
        <Box style={{ display: "flex" }}>
          <CalendarMonthIcon />
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <LocationOnIcon />
          <Typography variant="body2" color="text.secondary">
            {item.place}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <CurrencyRubleIcon />
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </Box>
      </CardContent>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
        }}
      >
        <Rating />
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/events/${item.id}`)}
        >
          Купить билет
        </Button>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {isAdmin ? (
          <IconButton onClick={() => deleteEvent(item.id)}>
            <DeleteIcon />
          </IconButton>
        ) : null}
        {isAdmin ? (
          <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
            <EditIcon />
          </IconButton>
        ) : null}
      </CardActions>
    </Card>
  );
}
