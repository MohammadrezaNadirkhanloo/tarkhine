import slider from "../../../../../public/img/Sliderfaq.png";
import sliderMobile from "../../../../../public/img/mobile/Sliderfaq-mobile.png";
import PageCustomAccess from "../_components/PageCustom";
import { dataFaq } from "./dataFAQ";

function Faq() {
  return (
    <PageCustomAccess
      data={dataFaq}
      slider={slider}
      sliderMobile={sliderMobile}
      titleImg="سوالات متداول از ترخینه"
    />
  );
}

export default Faq;
