import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const itemData = [
    {
      img: "https://sxodim.com/uploads/images/2022/06/13/optimized/3b9fd5bb734c2750814e775780b190bb_800xauto-q-85.jpg",
      title: "Концерты",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/06/06/optimized/31ad79b553ba963ce71707334cef9c9d_800xauto-q-85.jpg",
      title: "Кино",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/192c26cadc9cd6313311af3b166e793a_800xauto-q-85.jpg",
      title: "Детям",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/c027af2199d480d9aeb540c1c157dfae_800xauto-q-85.jpg",
      title: "Туризм",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/06/13/optimized/eb639b8ddbe3a6a82d1a94954c6e6638_800xauto-q-85.jpg",
      title: "Выставки",
    },
    {
      img: "https://sxodim.com/uploads/images/2022/02/28/optimized/1e372064573f7e20991ff63a6859bbea_800xauto-q-85.jpg",
      title: "Спорт",
    },
  ];
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <Typography
        style={{
          margin: "20px",
          marginTop: "40px",
          fontSize: "35px",
          textAlign: "center",
          fontFamily: "Merriweather",
        }}
      >
        Покупай билеты на интересные мероприятия онлайн!
      </Typography>
      <Container>
        <Carousel>
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://pre-party.com.ua/thumbnails/c4/c453d87c192b496b78153b64d7b87c26.jpg"
          />
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://sxodim.com/uploads/posts/2022/06/06/optimized/e479bba20c8ccd507e1f52a127344979_1522x570-q-85.jpg"
          />
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image="https://sxodim.com/uploads/posts/2022/06/09/optimized/67941269efb6793e96c90e5dbd983eaf_1522x570-q-85.jpg"
          />
        </Carousel>
        <Typography
          className="development"
          variant="h4"
          fontWeight="300px"
          textAlign="center"
          data-aos="fade-up"
        >
          Актуальные события в Бишкеке
        </Typography>
      </Container>
      <Typography sm={{ fontSize: "10px" }} variant="h5" margin={"20px"}>
        Ближайшие мероприятия
      </Typography>
      <Box display={"flex"} margin={"20px"} justifyContent="space-between">
        <ImageList sx={{ width: 700, height: 350 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ cursor: "pointer" }}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => navigate("/events")}
              />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          ))}
        </ImageList>
        <Calendar
          md={{ display: "flex", maxWidth: "100px" }}
          className="react-calendar"
        />
      </Box>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px 0 40px 0",
        }}
      >
        <Card data-aos="fade-right" sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", margin: "10px" }}>
              <Typography component="div" variant="h5" marginBottom="10px">
                Сольный концерт JK
              </Typography>
              <Button
                sm={{ fontSize: "10px" }}
                size="small"
                variant="contained"
                color="warning"
                margin="10px"
                onClick={() => navigate("/events")}
              >
                Узнать подробнее
              </Button>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, margin: "20px" }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3voSygZUI3O4o-4zgbxRPT8aunr1TneBjA&usqp=CAU"
            alt="Live from space album cover"
          />
        </Card>
        <Card data-aos="fade-left" sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", margin: "10px" }}>
              <Typography component="div" variant="h5" marginBottom="10px">
                Балет «Жизель»
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="warning"
                margin="10px"
                onClick={() => navigate("/events")}
              >
                Узнать подробнее
              </Button>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, margin: "20px" }}
            image="https://sxodim.com/uploads/images/2022/06/15/optimized/645b9668ee43e1df8897de2cbafcc56e_800xauto-q-85.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px 0 40px 0",
        }}
      >
        <Card data-aos="fade-right" sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", margin: "10px" }}>
              <Typography component="div" variant="h5" marginBottom="10px">
                Выступление Миши Марвина
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="warning"
                margin="10px"
                onClick={() => navigate("/events")}
              >
                Узнать подробнее
              </Button>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, margin: "20px" }}
            image="https://yt3.ggpht.com/uy_CoLzWirDf2C7BmOi_kIKOEcXmLfsB8cK2E0vliuqmPSvf_NFOobVlXDFhSk0-YtmaH54Hhw=s900-c-k-c0x00ffffff-no-rj"
            alt="Live from space album cover"
          />
        </Card>
        <Card data-aos="fade-left" sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", margin: "10px" }}>
              <Typography component="div" variant="h5" marginBottom="10px">
                "Лебединое озеро"
              </Typography>
              <Button
                size="small"
                variant="contained"
                color="warning"
                margin="10px"
                onClick={() => navigate("/events")}
              >
                Узнать подробнее
              </Button>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
              }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151, margin: "20px" }}
            image="https://kremlinpalace.org/images/events/1602246074.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
    </Container>
  );
};

export default HomePage;
