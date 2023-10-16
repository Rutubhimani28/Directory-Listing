// required
import React, { useState } from "react";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// components
import Sidebar from "../Sidebar/Sidebar";

const CustomDrawer = () => {
  const [state, setState] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };
  return (
    <div className="drawer">
      <button onClick={toggleDrawer(true)}>
        <FormatListBulletedOutlinedIcon />
      </button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          className="drawer-box"
        >
          <Sidebar />
        </Box>
      </Drawer>
    </div>
  );
};
export default CustomDrawer;
