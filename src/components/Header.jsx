import React from "react";
import DrawerAppBar from "./DrawerAppBar";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Box, Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <img src="/logo.png" width={180} height={150}></img>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "1",
            }}
          >
            <Typography align="center" color="#1b5e20" variant="h6">
              Amrutvahini Sheti And Shikshan Vikas Sanstha's
            </Typography>
            <Typography
              variant="h3"
              align="center"
              color="#1b5e20"
              sx={{ fontWeight: "bold" }}
            >
              Amrutvahini College Of Pharmacy
            </Typography>
            <Typography align="center" color="#1b5e20" variant="h7">
              Accredited by National Board of Accreditation (NBA) for B.Pharma
              Program
            </Typography>
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              align="center"
              color="#1b5e20"
              variant="h7"
            >
              (An ISO 9001:2015 certified college Permanently Affiliated to
              Savitribai Phule Pune University, Pune,<br></br> Approved by
              AICTE, PCI, New Delhi., D.T.E. & Government of Maharashtra,
              Mumbai.)
            </Typography>
          </Box>
        </Box>
        <DrawerAppBar />
      </ThemeProvider>
    </>
  );
}
export default Header;
