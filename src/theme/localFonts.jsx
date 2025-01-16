import LocalFont from "next/font/local";

const esteadadFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Estedad-FD-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-FD-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-FD-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-FD-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-esteadad",
  style: "normal",
  display: "block",
});

export default esteadadFont;
