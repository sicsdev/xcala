import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import tablestyle from './Myinvestment-summary.module.scss';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Myinvestmentsummary() {
  return (
  <div>
    <TableContainer className={tablestyle.table_container} style={{background: "#F9FBFD", borderRadius: "8px"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>

          </TableRow>
        </TableHead>
        <TableBody className={tablestyle.success_table}>
            <TableRow>
              <TableCell className={tablestyle.tablecell_heading} component="th" scope="row">
                <Typography className={`fw-600 black-color, ${tablestyle.tableheading}`}>
                Tienes
                </Typography>
                <Typography className={`p-16, ${tablestyle.tabledata}`}>
                Valor cuota (al 30/10/21) 
                    <Tooltip title="icon">
                       <IconButton>
                         <img width={20} height={20} src="/assets/images/ipassword.png"></img>
                        </IconButton>
                    </Tooltip>   
                </Typography>
                <Typography className={`p-16, ${tablestyle.tabledata}`}>
                N° de Cuotas  
                </Typography>

              </TableCell>
              <TableCell className={tablestyle.tablecell_heading}  align="right">
                <Typography className={`font-lg-18 fw-600 black-color, ${tablestyle.tabledata}`}>
                USD$ 9.259,25
                <span className={`font-lg-18, ${tablestyle.fade_text}`}>
                $ 7.000.000
                </span> 
                </Typography>  

                <Typography className={`font-lg-18, ${tablestyle.tabledata}`}>
                USD$ 5,89
                <span className={`font-lg-18, ${tablestyle.fade_text}`}>
                $ 4.777,07
                </span> 
                </Typography>   
                <Typography className={`font-lg-18, ${tablestyle.tabledata}`}>
                1.579
                </Typography>

              </TableCell>
            </TableRow>
            <TableRow>
             <TableCell component="th" scope="row">
                 <Typography className={`p-16, ${tablestyle.tabledata}`}>
                    Total depósitos
                    </Typography>
                    <Typography className={`p-16, ${tablestyle.tabledata}`}>
                    Rescates / Dividendos
                    </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography className={`font-lg-18, ${tablestyle.tabledata}`}>
                USD$ 8.641,97
                <span className={`font-lg-18, ${tablestyle.fade_text}`}>
                $ 7.000.000
                </span> 
                  </Typography>
                  <Typography className={`font-lg-18, ${tablestyle.tabledata}`}>
                  USD$ 1.234,56
                  <span className={`font-lg-18, ${tablestyle.fade_text}`}>
                  $ 999.994*
                  </span> 
                </Typography> 
              </TableCell>
            </TableRow>
            <TableRow style={{backgroundColor:"#182849"}}>
             <TableCell className={tablestyle.successbluebox} component="th" scope="row">
                 <Typography style={{ color:"#fff"}}  className="p-16">
                 Has ganado <span style={{color:"#49A197"}}>(+1,56%) </span> 
                     <Tooltip style={{color:"#fff"}} title="icon">
                        <IconButton>
                          <HelpIcon/>
                        </IconButton>
                      </Tooltip>
                 </Typography>
              </TableCell>
              <TableCell className={tablestyle.successbluebox} align="right">
                <Typography style={{color:"#fff"}} className="font-lg-18">
                USD$ 1.851,84
                <span className={`font-lg-18, ${tablestyle.fade_text}`}>
                $ 1.499.998
                  </span> 
                  </Typography>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Myinvestmentsummary;
