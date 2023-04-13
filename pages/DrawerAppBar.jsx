import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: yellow,
  },
});

const drawerWidth = 240;
("");
const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  {
    title: "Courses",
    url: "/courses",
    submenu: [
      { title: "Home", url: "/" },
      { title: "Academics", url: "/academics" },
      { title: "R&D", url: "/rd" },
      { title: "IIC", url: "/iic" },
      { title: "Students", url: "/students" },
    ],
  },
  { title: "Academics", url: "/academics" },
  { title: "R&D", url: "/rd" },
  {
    title: "IIC",
    url: "/iic",
    submenu: [
      { title: "Home", url: "/" },
      { title: "Academics", url: "/academics" },
      { title: "R&D", url: "/rd" },
      { title: "IIC", url: "/iic" },
      { title: "Students", url: "/students" },
    ],
  },
  { title: "Students", url: "/students" },
  { title: "Training and Placement", url: "/training-placement" },
  { title: "Events", url: "/events" },
  { title: "Workshop", url: "/workshop" },
  { title: "E Journal", url: "/e-journal" },
  { title: "NAAC", url: "/naac" },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Amrutvahinin college of Pharmacy
      </Typography>
      <Divider />
      <List>
        {navItems.map((menu) => (
          <ListItem key={menu.title} disablePadding>
            <Link href={menu.url}>{menu.title}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* Large screen elements render code */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }} p={2}>
              {navItems.map((menu) =>
                menu.submenu ? (
                  <BasicMenu menu={menu} />
                ) : (
                  <Button
                    href={menu.url}
                    key={menu.title}
                    sx={{ color: "#fff" }}
                  >
                    {menu.title}
                  </Button>
                )
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
function BasicMenu({ menu }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff" }}
      >
        {menu.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menu.submenu.map((menu, index) => (
          <MenuItem key={index} disablePadding>
            <Link href={menu.url}>{menu.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default DrawerAppBar;
