import { gray } from "@/theme/color";
import { Box, Typography } from "@mui/material";

function ListcustomFooter({ children, title }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "700", fontSize: { xs: 21, lg: 25 } }}
      >
        {title}
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
        {children}
      </Box>
    </Box>
  );
}

export default ListcustomFooter;
