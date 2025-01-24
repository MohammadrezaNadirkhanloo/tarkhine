import LinkCustom from "@/components/LinkCustom";
import { shades } from "@/theme/color";
import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: "700", mt: 10 }}
          gutterBottom
          color="primary"
        >
          404
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ fontWeight: "500", fontSize: 25 }}
        >
          صفحه ای که به دنبال آن هستید وجود ندارد.
        </Typography>
        <LinkCustom href="/" color={shades.primary}>
          رفتن به صفحه اصلی
        </LinkCustom>
      </Box>
    </Box>
  );
}

export default NotFound;
