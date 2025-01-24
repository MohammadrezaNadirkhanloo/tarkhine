import { gray } from "@/theme/color";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import NavLink from "../NavLink";

export default function NestedList({ navItems }) {
  const [openMenu, setOpenMenu] = React.useState({});

  const handleToggle = (id) => {
    setOpenMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <List>
      {navItems.map((item, index) => (
        <React.Fragment key={item.id}>
          {/* اگر آیتم زیرمنو دارد */}
          {item.list ? (
            <>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ color: gray[7] }}
                  onClick={() => handleToggle(item.id)}
                >
                  <ListItemText primary={item.title} />
                  {openMenu[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={openMenu[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.list.map((child) => (
                    <ListItem key={child.id} disablePadding>
                      <NavLink path={child.navlink}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary={child.titre} />
                        </ListItemButton>
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              {index !== navItems.length - 1 && (
                <Divider component="li" variant="middle" />
              )}
            </>
          ) : (
            // اگر آیتم زیرمنو ندارد
            <>
              <ListItem disablePadding>
                <NavLink path={item.linknav}>
                  <ListItemButton>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
              {index !== navItems.length - 1 && (
                <Divider component="li" variant="middle" />
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
