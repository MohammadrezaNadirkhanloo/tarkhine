"use client";

import NavLink from "@/components/NavLink";
import { gray, shades } from "@/theme/color";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";

function PageCustomAccess({ sliderMobile, slider, titleImg, data }) {
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
            backgroundColor: "rgba(0, 0, 0, 0.700)",
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
                color: shades.tint1,
              }}
            >
              {titleImg}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box>
        <Box sx={{ backgroundColor: shades.tint1, py: 3 }}>
          <Container sx={{ display: "flex", justifyContent: "start", gap: 2 }}>
            <NavLink path="/faq" full={false}>
              سوالات متداول
            </NavLink>
            <NavLink path="/roles" full={false}>
              قوانین ترخینه
            </NavLink>
            <NavLink path="/privacy" full={false}>
              حریم خصوصی
            </NavLink>
          </Container>
        </Box>
        <Box sx={{ mb: 7, mt: 3 }}>
          <Container>
            <Box
              sx={{
                border: 1,
                borderColor: gray[4],
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              {data.map((item) => (
                <Accordion key={item.id} sx={{ color: gray[7] }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      "&.Mui-expanded .MuiTypography-root": {
                        color: shades.primary,
                        fontWeight: "600",
                      },
                    }}
                  >
                    <Typography component="span">{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{item.desc}</AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default PageCustomAccess;
