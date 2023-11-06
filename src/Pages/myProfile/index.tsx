import { Box, Tabs, Tab, Typography } from "@mui/material";
import React from "react";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SecurityIcon from "@mui/icons-material/Security";
import PersonIcon from "@mui/icons-material/Person";
import Profile from "./profile";
import Security from "./security";
import Social from "./social";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MyProfile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="profilewrap">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              iconPosition="start"
              style={{
                fontWeight: "bold",
                marginRight: "15px",
              }}
              icon={<PersonIcon style={{ marginRight: "5px" }} />}
              label="Profile"
              {...a11yProps(0)}
            />
            <Tab
              iconPosition="start"
              style={{
                fontWeight: "bold",
                marginRight: "15px",
              }}
              icon={<ShareOutlinedIcon style={{ marginRight: "5px" }} />}
              label="Social Network"
              {...a11yProps(1)}
            />
            <Tab
              iconPosition="start"
              style={{
                fontWeight: "bold",
                marginRight: "15px",
              }}
              icon={<SecurityIcon style={{ marginRight: "5px" }} />}
              label="Security"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Profile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Social />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Security />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default MyProfile;
