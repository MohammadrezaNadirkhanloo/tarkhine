import { shades } from "@/theme/color";
import { IconButton } from "@mui/material";

function IconButtonCustome({ children, label, mobile ,...prop}) {
  return (
    <IconButton
      sx={{
        backgroundColor: shades.tint1,
        color: shades.primary,
        borderRadius: 1,
        display: mobile && { xs: "none", lg: "flex" } ,
      }}
      color="success"
      aria-label={label}
      {...prop}
    >
      {children}
    </IconButton>
  );
}

export default IconButtonCustome;
