import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import tablestyle from './Investment-table.module.scss'

const columns = [
  { id: 'Fecha',
   label: 'Fecha'
  },
  { id: 'movimiento',
   label: 'movimiento'
  },
  {
    id: 'monto',
    label: 'monto',
    minWidth: 140,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'cuotas',
    label: 'cuotas',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'valorcuota',
    label: 'valor cuota',

    align: 'right',
    format: (value) => value.toLocaleString('en-US'),   
  },
];

function createData(Fecha, movimiento, monto, cuotas, valorcuota) {
  return { Fecha, movimiento, monto, cuotas, valorcuota };
}

const rows = [
  createData('00/06/20', 'Inversión Inicial', '$ 7.000.000', '$ 1.741,25', '$ 4.020,09'),
  createData('31/07/20', 'Depósito de dividendo', '$ -$ 100.000', '$ 24,13', '$ 4.153,45'),
  createData('31/08/20', 'Depósito de dividendo', '$ -$ 100.000', '$ 240,47', '$ 4.153,45'),
  createData('30/09/20', 'Depósito de dividendo', '-$ 100.000', '$ 355,99', '$ 4.213,49'),
  createData('31/10/20', 'Depósito de dividendo', '$ -$ 100.000', '$ 355,99', '$ 4.213,49'),
  // createData('00/06/20', 'Inversión Inicial', 'USD$4.938,27', '1.741,25', '$ 4.020,09'),
  // createData('31/07/20', 'Aporte', 'USD$ 617,28', '24,13', '$ 4.153,45'),
  // createData('31/08/20', 'Rescate', 'USD$ 1.234,56', '240,47', '$ 4.153,45'),
  // createData('30/09/20', 'Aporte', 'USD$ 1.851,85', '355,99', '$ 4.213,49'),

];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table className={tablestyle.tablebody} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell className={tablestyle.tableheading}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.movimiento}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
