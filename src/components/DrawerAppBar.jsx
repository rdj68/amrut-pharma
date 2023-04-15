import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { yellow } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "@mui/material";
import navItems from "../data/navItems";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Collapse } from "@mui/material";

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

const drawerWidth = 300;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Amrutvahinin college of Pharmacy
      </Typography>
      <Divider />
      <List>
        {navItems.map((menu, key) => (
          <div key={key}>
            <SidebarMenuItem menu={menu} />
          </div>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        <AppBar component="nav" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* Large screen elements render code */}
            {/* <Container sx={{ display: { xs: "none", sm: "flex" } }} p={2}> */}

            <div className="hidden md:flex w-full justify-center">
              <ul className="flex ">
                {navItems.map((menu, key) => (
                  <div key={key} className=" hover:bg-green-900">
                    {menu.submenu ? (
                      <BasicMenu menu={menu} />
                    ) : (
                      // <Button
                      //   href={menu.url}
                      //   key={menu.title}
                      //   sx={{ color: "#fff", fullwidth: true }}
                      // >
                      //   {menu.title}
                      // </Button>
                      <li>
                        <Link href={menu.url}>
                          <div className="flex p-5 cursor-pointer font-semibold items-center justify-center text-white  resize-none">
                            <p>{menu.title}</p>
                          </div>
                        </Link>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
            {/* </Container> */}
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
    // <div>
    //   <Button
    //     id="basic-button"
    //     aria-controls={open ? "basic-menu" : undefined}
    //     aria-haspopup="true"
    //     aria-expanded={open ? "true" : undefined}
    //     onClick={handleClick}
    //     sx={{ color: "#fff" }}
    //   >
    //     {menu.title}
    //     {<ArrowDropDownIcon />}
    //   </Button>
    //   <Menu
    //     id="basic-menu"
    //     anchorEl={anchorEl}
    //     open={open}
    //     onClose={handleClose}
    //     // MenuListProps={{ onMouseLeave: handleClose }}
    //   >
    //     {menu.submenu.map((menu, index) => (
    //       <MenuItem key={index}>
    //         <Link href={menu.url}>{menu.title} </Link>
    //       </MenuItem>
    //     ))}
    //   </Menu>
    // </div>
    <li onMouseEnter={handleClick} onMouseLeave={handleClose}>
      <div className="flex p-5 cursor-pointer font-semibold items-center justify-center text-white">
        <p>{menu.title}</p>
        {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>
      {anchorEl && (
        <ul
          className={
            "flex flex-col absolute -mt-4 gap-2 p-2 z-50 justify-center items-center bg-white text-black border-[1px] rounded-md "
          }
        >
          {menu.submenu.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="hover:bg-gray-100 transition-all duration-300 ease-out hover:text-blue-700 rounded-md px-3 w-full cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
}

function SidebarMenuItem({ menu }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return menu.submenu ? (
    <>
      <ListItemButton component="a" key={menu.title} onClick={handleClick}>
        <ListItemText
          disableTypography
          primary={
            <Typography variant="body2" style={{ color: "#1b5e20" }}>
              {menu.title}
              {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
            </Typography>
          }
        />{" "}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className="pl-5">
          <List component="div" disablePadding>
            {menu.submenu.map((child, key) => (
              <ListItemButton component="a" key={key} href={child.url}>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography variant="body2" style={{ color: "#1b5e20" }}>
                      {child.title}
                    </Typography>
                  }
                />{" "}
              </ListItemButton>
            ))}
          </List>
        </div>
      </Collapse>
    </>
  ) : (
    <ListItemButton component="a" key={menu.title} href={menu.url}>
      <ListItemText
        disableTypography
        primary={
          <Typography variant="body2" style={{ color: "#1b5e20" }}>
            {menu.title}
          </Typography>
        }
      />{" "}
    </ListItemButton>
  );
}

export default DrawerAppBar;
