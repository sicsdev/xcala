import React from "react";
import { Icon } from "@mui/material";
// import * as Icon from '@mui/icons-material';
// import { TodayIcon, InsightsIcon, LocalFloristIcon } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
const Icondd = ({ icon }) => {
  console.log("icon", icon);
  return <>{icon && <img src = {`assets/images/objectives_interests_icons/${icon}.svg`} />}</>;
// return <>{icon &&  React.createElement(Icon[icon])}</>;
};

export default Icondd;