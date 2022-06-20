import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useContext(authContext);
  const navigate = useNavigate();

  function handleValues() {
    if (!email || !password) {
      alert("Please fill in!");
      return;
    }
    login(email, password, navigate);
    navigate("/events");
  }

  return (
    <Box
      margin={"50px"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"60vh"}
    >
      <Typography
        variant="h3"
        component="h2"
        style={{ fontFamily: "Merriweather" }}
      >
        Войти
      </Typography>
      {error ? <Alert severity="error">{error}</Alert> : null}

      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
      />

      <TextField
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "30%", margin: "10px" }}
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />

      <Button
        onClick={handleValues}
        style={{ width: "30%", margin: "10px" }}
        variant="contained"
      >
        Войти
      </Button>
      <Typography variant="p" component="h2">
        Еще нет аккаунта?
      </Typography>
      <Typography
        onClick={() => navigate("/register")}
        variant="p"
        color={"primary"}
        component="h2"
        style={{ cursor: "pointer" }}
      >
        Зарегистрироваться
      </Typography>
    </Box>
  );
};

export default LoginForm;
