import React from 'react';
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Helpertext = ({message,errormessage}) => {
  return <>
  {errormessage ? <> <CloseIcon />
      {errormessage}</>:<> <DoneIcon />
      {message}</>}
  </>
};

export default Helpertext;