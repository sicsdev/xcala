import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import mobiletablestyle from "./Mobileversion-table.module.scss";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Tooltip } from '@mui/material';
import { IconButton } from '@mui/material';


function Mobileversiontable() {
    
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          "aria-controls": `simple-tabpanel-${index}`,
        };
      }

      // tab
  const [value, setValue] = React.useState(0);

  const tab_handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // end-tab


  return (
  <div>
     <Grid container spacing={2}>
        <Grid item xs={12}>
        {/* tab  */}
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Tabs className={mobiletablestyle.table_tabs} value={value} onChange={tab_handleChange}>
                      <Tab style={{textTransform:"capitalize"}} label="Realizados" {...a11yProps(0)} />
                      <Tab style={{textTransform:"capitalize"}} label="Pendientes" {...a11yProps(1)} />
                    </Tabs>
                    </Grid>
               </Grid>
                  </Box>
                  </Box>
                  </Grid>
         {/* filter */}
         <Grid item xs={12}>
                      <div className={mobiletablestyle.filter}>
                      <Link to=""> <img src="/assets/images/filter.svg" alt=""></img> </Link>
                      <Typography className={mobiletablestyle.filter_text}>
                      Filtrar
                      </Typography>
                      <Link to=""> <img src="/assets/images/order.svg" alt=""></img> </Link>
                      <Typography>
                      Ordenar
                      </Typography>
                    </div>
                  </Grid>

        {/* Table */}

        <TableContainer className={mobiletablestyle.table_container} style={{background: "#F9FBFD", borderRadius: "8px"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          </TableRow>
        </TableHead>
        <TableBody className={mobiletablestyle.success_table}>
            <TableRow>
              <TableCell className={mobiletablestyle.tablecell_heading} component="th" scope="row">
              <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
              10/06/20
                </span> 
                <Typography style={{color:"#182849"}} className={`fw-600 font-lg-18 ${mobiletablestyle.tabledata}`}>
                Inversión inicial
                </Typography>
              </TableCell>

              <TableCell className={mobiletablestyle.tablecell_heading2}  align="right">
                <Typography style={{color:"#182849"}} className={`font-lg-18 fw-600 ${mobiletablestyle.tabledata}`}>
                USD$ 4.938,27
                <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
                $ 4.000.000
                </span> 
                </Typography>  

              </TableCell>
            </TableRow>
            <TableRow>
             <TableCell component="th" scope="row">
                 <Typography style={{color:"#587BC8", textTransform:"uppercase"}} className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                    Cuotas
                    </Typography>
                    <Typography style={{color:"#587BC8", textTransform:"uppercase"}} className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                    Valor Cuota
                    </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                  995,25
                </Typography>
                  <Typography className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                  USD$ 4,96
                  <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
                  $ 4.020,09
                  </span> 
                </Typography> 
              </TableCell>
            </TableRow>

        </TableBody>

        <TableBody className={mobiletablestyle.success_table}>
            <TableRow>
              <TableCell className={mobiletablestyle.tablecell_heading} component="th" scope="row">
              <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
              10/06/20
                </span> 
                <Typography style={{color:"#182849"}} className={`fw-600 font-lg-18 ${mobiletablestyle.tabledata}`}>
                Inversión inicial
                </Typography>
              </TableCell>

              <TableCell className={mobiletablestyle.tablecell_heading2}  align="right">
                <Typography style={{color:"#182849"}} className={`font-lg-18 fw-600 ${mobiletablestyle.tabledata}`}>
                USD$ 4.938,27
                <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
                $ 4.000.000
                </span> 
                </Typography>  

              </TableCell>
            </TableRow>
            <TableRow>
             <TableCell component="th" scope="row">
                 <Typography style={{color:"#587BC8", textTransform:"uppercase"}} className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                    Cuotas
                    </Typography>
                    <Typography style={{color:"#587BC8", textTransform:"uppercase"}} className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                    Valor Cuota
                    </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                  995,25
                </Typography>
                  <Typography className={`font-lg-18 ${mobiletablestyle.tabledata}`}>
                  USD$ 4,96
                  <span className={`font-lg-18 ${mobiletablestyle.fade_text}`}>
                  $ 4.020,09
                  </span> 
                </Typography> 
              </TableCell>
            </TableRow>

        </TableBody>

      </Table> 

    </TableContainer>

    </Grid>

  </div>
  );
}

export default Mobileversiontable;
