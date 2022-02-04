import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

function createData(data, value) {
    return { data, value};
  }
  const rows = [
    createData('Monto mínimo de inversión:', '$ 10.00'),
    createData('Moneda:', 'Dólar'),
    createData('Duración:', 'Indefinido'),
    createData('Plazo sugerido de inversión:', '18 meses'),
    createData('Comisión de salida:', 'No aplica'),
    createData('Comisión administrativa del fondo:', 'Desde 3%'),
    createData('Paga dividendos  mensuales:', 'SI'),
    createData('Plazo de rescate:', 'Máx. 11 días corridos'),
  ];  

function Productdetailconditions() {
  return (
  <div>
    <TableContainer style={{background: "#F1F4F9", borderRadius: "8px"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
                <Typography  className="p-18 font-lg-24 fw-600">
                Condiciones generales
                </Typography>
                </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.data}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Typography className="p-16">
              {row.data}
              </Typography>
                
              </TableCell>
              <TableCell align="right">
              <Typography style={{fontWeight:"600"}} className="p-18">
              {row.value}
              </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
}

export default Productdetailconditions;
