"use client";

import { createTheme } from "@mui/material/styles";
import { gray, shades } from "./color";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: `var(--font-esteadad)`,
  },
  palette: {
    mode: "light",
    primary: {
      main: shades.primary,
    },
    success: {
      light: "#F3FDFA",
      main: "#00BA88",
      dark: "#00966D",
    },
    error: {
      light: "#FFF2F2",
      main: "#ED2E2E",
      dark: "#C30000",
    },
    warning: {
      light: "#FFF8E1",
      main: "#F4B740",
      dark: "#A9791C",
    },
    grey: gray,
    // grey: {
    //   50: "",
    //   100: "",
    //   200: "",
    //   300: "",
    //   400: "",
    //   500: "",
    //   600: "",
    //   700: "",
    //   800: "",
    //   900: "",
    // },
  },
});
