import slider from "../../../../../public/img/Slider-privacy.png";
import sliderMobile from "../../../../../public/img/mobile/Slider-privacyMobile.png";
import PageCustomAccess from "../_components/PageCustom";
import { dataPrivacy } from "./dataPRIVACY";

function Privacy() {
  return (
    <PageCustomAccess
      data={dataPrivacy}
      slider={slider}
      sliderMobile={sliderMobile}
      titleImg="حریم شخصی کاربران"
    />
  );
}

export default Privacy;
