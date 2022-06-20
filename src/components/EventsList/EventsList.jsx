import React, { useContext, useEffect, useState } from "react";
import { eventContext } from "../../contexts/eventContext";
import EventCard from "../EventCard/EventCard";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import { Button, Pagination } from "@mui/material";
import { Box, Container } from "@mui/system";
import { authContext } from "../../contexts/authContext";

const EventsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getEvents, events, pages } = useContext(eventContext);
  const { isAdmin } = useContext(authContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState([50, 5000]);
  useEffect(() => {
    // getEvents();
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, []);
  useEffect(() => {
    // getEvents();
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [location]);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, page, price]);

  useEffect(() => {
    getEvents();
  }, [searchParams]);
  // console.log(events);

  return (
    <Container style={{ marginTop: "90px" }}>
      {isAdmin ? (
        <Button
          onClick={() => navigate("/add-event")}
          variant="contained"
          marginTop="30px"
        >
          Добавить новое событие
        </Button>
      ) : null}
      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      <Box display={"flex"}>
        {events.map((item) => (
          <EventCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          style={{ marginBottom: "20px" }}
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default EventsList;
