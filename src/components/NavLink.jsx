"use client";
import { gray, shades } from "@/theme/color";
import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children, full = true, ...prop }) {
  const pathname = usePathname();
  return (
    <MuiLink
      component={Link}
      href={path}
      sx={{
        color: pathname === path ? shades.primary : gray[7],
        textDecoration: pathname === path ? "underline" : "none",
        textDecorationColor: shades.primary,
        textUnderlineOffset: "10px",
        fontWeight: pathname === path ? 700 : 500,
        transition: "all 0.5s ease",
        width: full ? "100%" : "auto",
        "&:hover": {
          color: shades.primary,
        },
        ...prop,
      }}
    >
      {children}
    </MuiLink>
  );
}
export default NavLink;
