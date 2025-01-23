import { Box, Container, TextField, Typography } from "@mui/material";
import React from "react";
import footerimg from "../../../public/img/footer.png";
import Image from "next/image";
import { gray } from "@/theme/color";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import LinkCustom from "../LinkCustom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TextAreaCustom from "@/ui/TextareaCustom";

function Footer() {
  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "319px" }}>
      <Image
        src={footerimg}
        alt="Background"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
      />
      <Box sx={{ position: "relative", zIndex: 10, color: "white", top: 40 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  دسترسی آسان
                </Typography>
                <Box
                  sx={{
                    color: gray[3],
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "start",
                  }}
                >
                  <LinkCustom href="/" color={gray[3]}>
                    پرسش‌های متداول
                  </LinkCustom>
                  <LinkCustom href="/" color={gray[3]}>
                    قوانین ترخینه
                  </LinkCustom>
                  <LinkCustom href="/" color={gray[3]}>
                    حریم خصوصی
                  </LinkCustom>
                  <Box sx={{ display: "flex", gap: "3px" }}>
                    <TwitterIcon />
                    <InstagramIcon />
                    <TelegramIcon />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "700" }}>
                  شعبه‌های ترخینه
                </Typography>
                <Box
                  sx={{
                    color: gray[3],
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "start",
                  }}
                >
                  <LinkCustom href="/" color={gray[3]}>
                    شعبه اکباتان
                  </LinkCustom>
                  <LinkCustom href="/" color={gray[3]}>
                    شعبه چالوس
                  </LinkCustom>
                  <LinkCustom href="/" color={gray[3]}>
                    شعبه اقدسیه
                  </LinkCustom>
                  <LinkCustom href="/" color={gray[3]}>
                    شعبه ونک
                  </LinkCustom>
                </Box>
              </Box>
            </Grid>
            <Grid size={6} sx={{ display: { xs: "none", lg: "block" } }}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "700",mb:3 }}>
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
                      {/* <TextAreaCustom
                        label="پیام"
                        placeholder="متن خود را اینجا وارد کنید"
                        value={text}
                        onChange={handleTextChange}
                        rows={5}
                        maxLength={100}
                        error={error}
                      /> */}
                      <textarea style={{width:"100%"}}/>
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
