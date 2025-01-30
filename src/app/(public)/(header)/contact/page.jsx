import { Container } from "@mui/material";
import slider from "../../../../../public/img/Slidercontant.png";
import sliderMobile from "../../../../../public/img/mobile/Slidercontant-mobile.png";
import PageCustomHeader from "../_components/PageCustom";
import { contactData } from "./data";
import CardContact from "./_components/CardContact";

function Contact() {
  return (
    <PageCustomHeader
      slider={slider}
      sliderMobile={sliderMobile}
      titleImg="با ترخینه در تماس باشید."
    >
      <Container
        sx={{ display: "flex", flexDirection: "column", alignItems: "center",my:4 }}
      >
        {contactData.map((item) => (
          <CardContact
            key={item.id}
            title={item.title}
            address={item.address}
            phone={item.phone}
            href={item.href}
            imageCard={item.image}
            imageCardMobile={item.imageMobile}
          />
        ))}
      </Container>
    </PageCustomHeader>
  );
}

export default Contact;
