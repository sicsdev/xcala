import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import tablestyle from "./Investment-table.module.scss";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// end-tabs

const columns = [
  { id: "Fecha", label: "Fecha" },
  { id: "movimiento", label: "movimiento" },
  {
    id: "monto",
    label: "monto",
    minWidth: 140,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cuotas",
    label: "cuotas",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "valorcuota",
    label: "valor cuota",

    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(Fecha, movimiento, monto, cuotas, valorcuota) {
  return { Fecha, movimiento, monto, cuotas, valorcuota };
}

const rows = [
  createData(
    "00/06/20",
    "Inversión Inicial",
    "$ 7.000.000",
    "$ 1.741,25",
    "$ 4.020,09"
  ),
  createData(
    "31/07/20",
    "Depósito de dividendo",
    "$ -$ 100.000",
    "$ 24,13",
    "$ 4.153,45"
  ),
  createData(
    "31/08/20",
    "Depósito de dividendo",
    "$ -$ 100.000",
    "$ 240,47",
    "$ 4.153,45"
  ),
  createData(
    "30/09/20",
    "Depósito de dividendo",
    "-$ 100.000",
    "$ 355,99",
    "$ 4.213,49"
  ),
  createData(
    "31/10/20",
    "Depósito de dividendo",
    "$ -$ 100.000",
    "$ 355,99",
    "$ 4.213,49"
  ),
  
  createData(
    "00/06/20",
    "Inversión Inicial",
    "$ 7.000.000",
    "$ 1.741,25",
    "$ 4.020,09"
  ),
  // createData('00/06/20', 'Inversión Inicial', 'USD$4.938,27', '1.741,25', '$ 4.020,09'),
  // createData('31/07/20', 'Aporte', 'USD$ 617,28', '24,13', '$ 4.153,45'),
  // createData('31/08/20', 'Rescate', 'USD$ 1.234,56', '240,47', '$ 4.153,45'),
  // createData('30/09/20', 'Aporte', 'USD$ 1.851,85', '355,99', '$ 4.213,49'),
];

// notselected
export default function StickyHeadTable({selector}) {

  // selector
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    // selector

  // tab
  const [value, setValue] = React.useState(0);

  const tab_handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // end-tab

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* tab  */}
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Tabs className={tablestyle.table_tabs} value={value} onChange={tab_handleChange}>
                      <Tab style={{textTransform:"capitalize"}} label="Realizados" {...a11yProps(0)} />
                      <Tab style={{textTransform:"capitalize"}} label="Pendientes" {...a11yProps(1)} />
                    </Tabs>
                    </Grid>
                  <Grid item xs={6}>
                      <div className={tablestyle.filter}>
                      <Link to=""> <img src="/assets/images/filter.svg" alt=""></img> </Link>
                      <Typography className={tablestyle.filter_text}>
                      Filtrar
                      </Typography>
                      <Link to=""> <img src="/assets/images/order.svg" alt=""></img> </Link>
                      <Typography>
                      Ordenar
                      </Typography>
                    </div>
                  </Grid>
               </Grid>
                  </Box>


  {/* selector */}
{selector === "notselected" ? <></> : <FormControl variant="standard" sx={{ mt: 3, mb:2, minWidth: 400 }}>
        <InputLabel id="demo-simple-select-standard-label">Fondo</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          IconComponent={() => <img src="/assets/images/arrow_down.svg" />}
        >
          <MenuItem value={5}>Todos</MenuItem>
        </Select>
      </FormControl>}
 {/* selector */}


            <TabPanel value={value} index={0}>
   {/* 1st tab */}
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  className={tablestyle.tablebody}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          className={tablestyle.tableheading}
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.movimiento}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  className={tablestyle.tabledata}
                                  key={column.id}
                                  align={column.align}
                                >
                                  {column.format && typeof value === "number"
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
  {/* end tab-1  */}
            </TabPanel>
            <TabPanel value={value} index={1}>
  {/* 2nd- tab */}            
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table
                  className={tablestyle.tablebody}
                  stickyHeader
                  aria-label="sticky table"
                >
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          className={tablestyle.tableheading}
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      ).slice(0, 3)
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.movimiento}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell
                                  className={tablestyle.tabledata}
                                  key={column.id}
                                  align={column.align}
                                >
                                  {column.format && typeof value === "number"
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
{/* end 2nd tab */}
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
      {/* Tab */}

      {/* End-Tab  */}

      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
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
