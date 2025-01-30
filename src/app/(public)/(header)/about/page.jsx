import { gray } from "@/theme/color";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Box, Container, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import picture from "../../../../../public/img/Imageaboutbody.png";
import slider from "../../../../../public/img/Sliderabout.png";
import pictureMobile from "../../../../../public/img/mobile/Imageaboutbody-mobile.png";
import sliderMobile from "../../../../../public/img/mobile/Slideraboutmobile.png";
import PageCustomHeader from "../_components/PageCustom";
import CardAbout from "../_components/CardAbout";

function About() {
  return (
    <PageCustomHeader
      slider={slider}
      sliderMobile={sliderMobile}
      titleImg="درباره ترخینه بیشتر بدانید!"
    >
      <Container sx={{ my: 3, maxWidth: { xs: "sm", lg: "lg" } }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: gray[8] }}
              gutterBottom
            >
              درباره ما
            </Typography>
          </Grid>
          <Grid size={12} sx={{ display: { xs: "block", lg: "none" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: gray[7], fontSize: { xs: 11, md: 14 } }}
              >
                رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در
                طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به
                موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این
                سال‌ها اولویت جلب رضایت مشتریان بوده است.
              </Typography>
              <Image src={pictureMobile} alt="image about" />
            </Box>
          </Grid>
          <Grid size={12} sx={{ display: { xs: "block", lg: "none" } }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: gray[7], mt: 3, fontSize: { xs: 11, md: 14 } }}
            >
              دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت
              غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های
              مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات
              خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری
              جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا
              را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن
              و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما
              عزیزان می‌باشند.
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: gray[7], mt: 3, fontSize: { xs: 11, md: 14 } }}
            >
              چشم انداز : در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
              آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
              روز که همه ایرانیان سالم و سلامت باشند.
            </Typography>
          </Grid>
          <Grid size={6} sx={{ display: { xs: "none", lg: "block" } }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: gray[7], lineHeight: 2 }}
            >
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و
              مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز
              توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو
              طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و
              سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: gray[7], mt: 3, lineHeight: 2 }}
            >
              چشم انداز : در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
              آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن
              روز که همه ایرانیان سالم و سلامت باشند.
            </Typography>
          </Grid>
          <Grid size={6} sx={{ display: { xs: "none", lg: "block" } }}>
            <Image src={picture} alt="image about" />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: gray[3], mt: 18 }}>
        <Container sx={{ display: "flex", alignItems: "center", py: 5 }}>
          <CardAbout type="user" title="پرسنلی مجرب و حرفه‌ای" />
          <Divider orientation="vertical" variant="middle" flexItem />
          <CardAbout type="chart" title="کیفیت بالای غذاها" />
          <Divider orientation="vertical" variant="middle" flexItem />
          <CardAbout type="home" title="محیطی دلنشین و آرام" />
          <Divider orientation="vertical" variant="middle" flexItem />
          <CardAbout type="menu" title="منوی متنوع" />
        </Container>
      </Box>
    </PageCustomHeader>
  );
}

export default About;
