import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "@/src/components/Header";
import Carousel from "@/src/components/Carousel";
import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: yellow,
  },
  breakpoints: {
    values: {
      md: 768,
    },
  },
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Amrutvahini college of Pharmacy</title>
        <meta
          name="description"
          content="Amrutvahini College of Pharmacy, P.O. Sangamner S.K.,Tal. Sangamner, Dist. Ahmednagar-422608, Maharashtra, India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box>
        <Header />
        <Carousel></Carousel>
        <Box marginTop="5vh" gap="2vh">
          <Typography
            align="center"
            color="#1b5e20"
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: "sans-serif" }}
            gutterBottom
          >
            E-Resources
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2vh",
              justifyContent: "center",
            }}
          >
            <img src="/campus-ERP1.jpg"></img>
            <img src="/online-feedback.jpg"></img>
            <img src="/alumni.jpg"></img>
          </Box>
        </Box>
      </Box>
    </>
  );
}
