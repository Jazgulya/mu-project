import { Grid, Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "grey", position: "static" }}
        className="footer">
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 5, sm: 10 }}
          bgcolor="text.secondary"
          color="white">
          <Container maxWidth="lg" height="100px">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={3}>
                <Box>О нас</Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    О компании
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Контакты
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Кассы
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>Как купить</Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Как купить билеты
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Возврат билетов
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box>Мы в соцсетях</Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Facebook
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    Instagram
                  </Link>
                </Box>
                <Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    color="inherit">
                    V kontakte
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}>
              Material UI WorkShop &reg; {new Date().getFullYear()}
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
