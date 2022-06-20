import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent/AddEvent";
import DetailsEvent from "./components/DetailsEvent/DetailsEvent";
import EventsList from "./components/EventsList/EventsList";
import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Cart from "./components/Cart/Cart";
import EditEvent from "./components/EditEvent/EditEvent";
import Payment from "./components/Cart/Payment";
import NotFound from "./components/NotFound/NotFound";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/edit/:id"
        element={isAdmin ? <EditEvent /> : <Navigate replace to="/*" />}
      />
      <Route
        path="/add-event"
        element={isAdmin ? <AddEvent /> : <Navigate replace to="/*" />}
      />
      <Route path="/events" element={<EventsList />} />;
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/events/:id" element={<DetailsEvent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
