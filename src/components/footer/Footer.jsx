"use client";

import { gray } from "@/theme/color";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import footerimg from "../../../public/img/footer.png";
import footerimgMobile from "../../../public/img/mobile/footerMobile.png";
import LinkCustom from "../LinkCustom";
import { Access, Branch } from "./dataFooter";
import ListcustomFooter from "./ListcustomFooter";

function Footer() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "319px" }}>
      {isMobile ? (
        <Image
          src={footerimgMobile}
          alt="Background for Mobile"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      ) : (
        <Image
          src={footerimg}
          alt="Background for Desktop"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      )}
      <Box sx={{ position: "relative", zIndex: 10, color: "white", top: 40 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={6} sx={{ display: { xs: "none", lg: "block" } }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 2 }}>
                  ترخینه
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  این وب‌سایت نمونه‌کار است و صرفاً برای نمایش توانمندی‌ها و
                  پروژه‌های انجام‌شده طراحی شده است. تمام محتوا و طرح‌های موجود
                  در این سایت، تنها به منظور نمایش مهارت‌های فنی و خلاقانه این
                  مجموعه به کارفرمایان و علاقه‌مندان قرار داده شده است. تمامی
                  حقوق این وب‌سایت و محتواهای آن محفوظ است و هر گونه کپی‌برداری،
                  استفاده یا انتشار بدون اجازه کتبی از صاحب اثر، ممنوع و پیگرد
                  قانونی دارد.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, lg: 3 }}>
              <ListcustomFooter title="دسترسی آسان">
                {Access.map((item) => (
                  <Box key={item.id}>
                    <LinkCustom href={item.href} color={gray[3]}>
                      {item.title}
                    </LinkCustom>
                  </Box>
                ))}
                <Box sx={{ display: "flex", gap: "3px" }}>
                  <TwitterIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                </Box>
              </ListcustomFooter>
            </Grid>
            <Grid size={{ xs: 6, lg: 3 }}>
              <ListcustomFooter title="شعبه‌های ترخینه">
                {Branch.map((item) => (
                  <Box key={item.id}>
                    <LinkCustom href={item.href} color={gray[3]}>
                      {item.title}
                    </LinkCustom>
                  </Box>
                ))}
              </ListcustomFooter>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
