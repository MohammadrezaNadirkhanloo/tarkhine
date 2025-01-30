"use client";

import { gray } from "@/theme/color";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import ekbatan from "../../../../../../public/img/aboutone.png";
import ekbatanmobile from "../../../../../../public/img/mobile/aboutone-mobile.png";
import chalos from "../../../../../../public/img/abouttwo.png";
import chalosmobile from "../../../../../../public/img/mobile/abouttwo-mobile.png";
import aghdas from "../../../../../../public/img/aboutthree.png";
import aghdasmobile from "../../../../../../public/img/mobile/aboutthree-mobile.png";
import vanak from "../../../../../../public/img/aboutfour.png";
import vanakmobile from "../../../../../../public/img/mobile/aboutfour-mobile.png";

const imagesrc = {
  ekbatan,
  chalos,
  aghdas,
  vanak,
};
const imageMobilesrc = {
  ekbatanmobile,
  chalosmobile,
  aghdasmobile,
  vanakmobile,
};

function CardContact({
  title,
  address,
  phone,
  href,
  imageCard,
  imageCardMobile,
}) {
  const isMobile = useMediaQuery("(max-width:600px)");
  const image = imagesrc[imageCard];
  const imageMobile = imageMobilesrc[imageCardMobile];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: { xs: "auto", lg: "100%" },
        border: 1,
        borderColor: gray[4],
        borderRadius: 3,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        },
        my: 1.5,
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box sx={{ height: { xs: 112, sm: 270 } }}>
        {isMobile ? (
          <Image alt="image" src={imageMobile} />
        ) : (
          <Image alt="imagemobile" src={image} />
        )}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: 250,
          py:2
        }}
      >
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight={700}
            color={gray[8]}
            sx={{ mb: 2 }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            gutterBottom
            color={gray[7]}
            sx={{ mb: 1.5,fontSize:{ xs: 11, sm: 18 } }}
          >
            {address}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            color={gray[7]}
            sx={{ mb: 1.5,fontSize:{ xs: 11, sm: 18 } }}
          >
            {phone}
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            color={gray[7]}
            sx={{ mb: 1.5,fontSize:{ xs: 11, sm: 18 } }}
          >
            ساعت کاری: همه‌روزه از ساعت۱۲ تا ۲۳بجز روز‌های تعطیل
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button variant="outlined" href={href} sx={{ px: 4 }}>
            صفحه شعبه
          </Button>
          <Button variant="contained" sx={{ px: 4 }}>
            دیدن در نقشه
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CardContact;
