"use client";

import { gray } from "@/theme/color";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
            <Grid size={{ xs: 6, lg: 3 }}>
              <ListcustomFooter title="دسترسی آسان">
                {Access.map((item) => (
                  <LinkCustom key={item.id} href={item.href} color={gray[3]}>
                    {item.title}
                  </LinkCustom>
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
                  <LinkCustom key={item.id} href={item.href} color={gray[3]}>
                    {item.title}
                  </LinkCustom>
                ))}
              </ListcustomFooter>
            </Grid>
            <Grid size={6} sx={{ display: { xs: "none", lg: "block" } }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "700", mb: 3 }}>
                  پیام به ترخینه
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="نام و نام خانوادگی"
                        variant="outlined"
                        autoComplete="off"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // گرد کردن گوشه‌ها
                            "& fieldset": {
                              borderColor: "white", // رنگ اولیه border
                            },
                            "&:hover fieldset": {
                              borderColor: "white", // رنگ هنگام hover
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white", // رنگ هنگام فوکوس
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white", // رنگ label پیش‌فرض
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "green", // رنگ label هنگام فوکوس
                          },
                          "& .MuiOutlinedInput-root input": {
                            color: "white", // رنگ متن داخل input
                          },
                        }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="شماره تماس"
                        variant="outlined"
                        autoComplete="off"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // گرد کردن گوشه‌ها
                            "& fieldset": {
                              borderColor: "white", // رنگ اولیه border
                            },
                            "&:hover fieldset": {
                              borderColor: "white", // رنگ هنگام hover
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white", // رنگ هنگام فوکوس
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white", // رنگ label پیش‌فرض
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "green", // رنگ label هنگام فوکوس
                          },
                          "& .MuiOutlinedInput-root input": {
                            color: "white", // رنگ متن داخل input
                          },
                        }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="آدرس ایمیل (اختیاری)"
                        variant="outlined"
                        autoComplete="off"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "10px", // گرد کردن گوشه‌ها
                            "& fieldset": {
                              borderColor: "white", // رنگ اولیه border
                            },
                            "&:hover fieldset": {
                              borderColor: "white", // رنگ هنگام hover
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "white", // رنگ هنگام فوکوس
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: "white", // رنگ label پیش‌فرض
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "green", // رنگ label هنگام فوکوس
                          },
                          "& .MuiOutlinedInput-root input": {
                            color: "white", // رنگ متن داخل input
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={6}>
                    <Box>
                      //TODO: textarea
                      {/* <TextAreaCustom
                        label="پیام"
                        placeholder="متن خود را اینجا وارد کنید"
                        value={text}
                        onChange={handleTextChange}
                        rows={5}
                        maxLength={100}
                        error={error}
                      /> */}
                      <textarea style={{ width: "100%" }} />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
