import slider from "../../../../../public/img/Slider-role.png";
import sliderMobile from "../../../../../public/img/mobile/Slider-roleMobile.png";
import PageCustomAccess from "../_components/PageCustom";
import { dataRoles } from "./dataROLES";

function Roles() {
  return (
    <PageCustomAccess
      data={dataRoles}
      slider={slider}
      sliderMobile={sliderMobile}
      titleImg="قوانین ترخینه"
    />
  );
}

export default Roles;
