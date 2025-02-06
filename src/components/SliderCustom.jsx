"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { gray, shades } from "@/theme/color";

// تصاویر دسکتاپ و موبایل
const slides = [
  {
    desktop: "/img/Sliderone.png",
    mobile: "/img/mobile/Sliderone-mobile.png",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    desktop: "/img/Slidertwo.png",
    mobile: "/img/mobile/Slidertwo-mobile.png",
    title: "طعم بی‌نظیر طبیعت!",
  },
  {
    desktop: "/img/Sliderthree.png",
    mobile: "/img/mobile/Sliderthree-mobile.png",
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
  },
  {
    desktop: "/img/Sliderone.png",
    mobile: "/img/mobile/Sliderone-mobile.png",
    title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
  },
  {
    desktop: "/img/Slidertwo.png",
    mobile: "/img/mobile/Slidertwo-mobile.png",
    title: "طعم بی‌نظیر طبیعت!",
  },
  {
    desktop: "/img/Sliderthree.png",
    mobile: "/img/mobile/Sliderthree-mobile.png",
    title: "لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!",
  },
];

function SliderCustom() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <Swiper
        dir="rtl"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 1, spaceBetween: 30 },
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        style={{
          "--swiper-pagination-color": shades.primary,
          "--swiper-pagination-bullet-inactive-color": gray[9],
          "--swiper-pagination-bullet-size": isMobile ? "6px" : "9px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
          "--swiper-navigation-color": gray.white,
          "--swiper-navigation-size": isMobile ? "0px" : "30px",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: isMobile ? "360px" : "1440px", // کنترل حداکثر عرض
                height: isMobile ? "176px" : "336px", // ارتفاع متفاوت برای موبایل و دسکتاپ
                margin: "0 auto", // مرکز‌چین کردن اسلایدر
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Image
                src={isMobile ? slide.mobile : slide.desktop}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 1440px"
              />

              {/* محتوای روی اسلاید */}
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
                    textAlign: "center",
                    padding: "16px",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "700",
                      fontSize: isMobile ? 14 : 32,
                      color: gray[2],
                    }}
                  >
                    {slide.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 43,
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: { xs: "10px", sm: "16px", lg: "18px" }, // اندازه فونت متناسب با اندازه صفحه
                      padding: {
                        xs: "6px 12px",
                        sm: "8px 16px",
                        lg: "10px 20px",
                      }, // اندازه padding
                      minWidth: "auto", // جلوگیری از تعیین عرض ثابت
                      borderRadius: "9px", // گرد کردن گوشه‌ها
                    }}
                  >
                    سفارش انلاین غذا
                  </Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default SliderCustom;
