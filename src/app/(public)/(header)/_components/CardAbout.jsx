import { Box, colors, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { gray } from "@/theme/color";

const iconMap = {
  user: PersonOutlineOutlinedIcon,
  chart: StackedLineChartIcon,
  home: WeekendOutlinedIcon,
  menu: MenuBookOutlinedIcon,
};

function CardAbout({ type, title }) {
  const Icon = iconMap[type];
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {Icon ? <Icon sx={{ width: { xs: 20, lg: 48 }, height: { xs: 20, lg: 48 }, color: gray[8] }} /> : null}
      <Typography
        variant="subtitle1"
        gutterBottom
        sx={{ color: gray[7], mt: 1, textAlign: "center" }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default CardAbout;
