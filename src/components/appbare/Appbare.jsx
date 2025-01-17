"use client";

import { gray } from "@/theme/color";
import IconButtonCustome from "@/ui/IconButtonCustome";
import MenuCustom from "@/ui/MenuCustom";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Slide, useScrollTrigger } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import PropTypes from "prop-types";
import * as React from "react";
import logo from "../../../public/img/Logo.svg";
import logomobile from "../../../public/img/Logomobile.svg";
import NavLink from "../NavLink";
import { navItems } from "./datamenu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Logomobilemenu from "../../../public/img/mobile/top Frame.svg";
import NestedList from "./ListmenuMobile";

const drawerWidth = 256;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div />}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element,
    window: PropTypes.func,
  };

  const drawer = (
    <Box>
      <Box onClick={handleDrawerToggle}>
        <Image
          alt="Logomobilemenu"
          src={Logomobilemenu}
          quality={90}
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      {/* <Divider /> */}
      {/* <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <NavLink path={item.linknav}>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List> */}
      <NestedList navItems={navItems} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" sx={{ backgroundColor: gray.white }}>
          <Container>
            <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
              <Box>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { lg: "none" } }}
                >
                  <MenuOpenOutlinedIcon />
                </IconButton>

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Image src={logomobile} alt="logo" />
                </Box>
              </Box>
              <Box sx={{ display: { xs: "block", lg: "none" } }}>
                <Image src={logo} alt="logo" width={102} height={32} />
              </Box>
              <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 3 }}>
                {navItems.map((item) => (
                  <Box key={item.id} sx={{ color: gray[7] }}>
                    {item.list ? (
                      <MenuCustom
                        id={item.id}
                        title={item.title}
                        menuItems={item.list}
                      />
                    ) : (
                      <NavLink path={item.linknav}>{item.title}</NavLink>
                    )}
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButtonCustome mobile={true} label="search">
                  <SearchIcon
                    sx={{ fontSize: { xs: "large", lg: "x-large" } }}
                  />
                </IconButtonCustome>
                <IconButtonCustome label="shop">
                  <ShoppingCartOutlinedIcon
                    sx={{ fontSize: { xs: "large", lg: "x-large" } }}
                  />
                </IconButtonCustome>
                <IconButtonCustome label="user">
                  <PersonOutlineOutlinedIcon
                    sx={{ fontSize: { xs: "large", lg: "x-large" } }}
                  />
                </IconButtonCustome>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
