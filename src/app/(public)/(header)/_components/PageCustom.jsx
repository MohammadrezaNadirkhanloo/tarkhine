"use client";

import { gray } from "@/theme/color";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

function PageCustomHeader({ sliderMobile, slider, titleImg, children }) {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "176px", lg: "319px" },
        }}
      >
        {isMobile ? (
          <Image
            src={sliderMobile}
            alt="Background for Mobile"
            fill
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        ) : (
          <Image
            src={slider}
            alt="Background for Desktop"
            fill
            style={{ objectFit: "cover", zIndex: -1 }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        <Container>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              textAlign: "center",
              padding: "16px",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: "700",
                fontSize: { xs: 22, lg: 40 },
                color: gray[2],
              }}
            >
              {titleImg}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box>{children}</Box>
    </>
  );
}

export default PageCustomHeader;
