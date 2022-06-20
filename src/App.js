import React from "react";
import Footer from "./components/Footer/Footer";
import Routing from "./Routing";
import "./App.css";
import AuthContextProvider from "./contexts/authContext";
import { CartProvider } from "react-use-cart";
import EventsContextProvider from "./contexts/eventContext";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <AuthContextProvider>
      <EventsContextProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </EventsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
