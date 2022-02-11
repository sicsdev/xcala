import React from "react";
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
import tableData from "../../data/tabledata.json";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
          <Box>
          {children}
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

function Mobileversiontable({ selector }) {
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

  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // selector
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // selector

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* tab  */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Tabs
                    className={mobiletablestyle.table_tabs}
                    value={value}
                    onChange={tab_handleChange}
                  >
                    <Tab
                      style={{ textTransform: "capitalize" }}
                      label="Realizados"
                      {...a11yProps(0)}
                    />
                    <Tab
                      style={{ textTransform: "capitalize" }}
                      label="Pendientes"
                      {...a11yProps(1)}
                    />
                  </Tabs>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        {/* selector */}
        {selector === "notselected" ? (
          <></>
        ) : (
          <FormControl variant="standard" fullWidth sx={{ mt: 3, mb: 2, ml:2}}>
            <InputLabel id="demo-simple-select-standard-label">
              Fondo
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              IconComponent={() => <img src="/assets/images/arrow_down.svg" />}
            >
              <MenuItem value={10}>Todos</MenuItem>
            </Select>
          </FormControl>
        )}
        {/* selector */}

        {/* filter */}
        <Grid item xs={12}>
          <div className={mobiletablestyle.filter}>
            <Link to="">
              {" "}
              <img src="/assets/images/filter.svg" alt=""></img>{" "}
            </Link>
            <Typography className={mobiletablestyle.filter_text}>
              Filtrar
            </Typography>
            <Link to="">
              {" "}
              <img src="/assets/images/order.svg" alt=""></img>{" "}
            </Link>
            <Typography>Ordenar</Typography>
          </div>
        </Grid>

        <TabPanel style={{ width: "100%" }} value={value} index={0}>
          {/* Table */}

          {tableData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data) => (
              <div className={mobiletablestyle.table_main}>
                <TableContainer
                  className={mobiletablestyle.table_container}
                  key={data.id}
                >
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow></TableRow>
                    </TableHead>
                    <TableBody className={mobiletablestyle.success_table}>
                      <TableRow>
                        <TableCell
                          className={mobiletablestyle.tablecell_heading}
                          component="th"
                          scope="row"
                        >
                          <span className={mobiletablestyle.fade_text}>
                            {data.date}
                          </span>
                          <Typography
                            style={{ color: "#182849" }}
                            className={`fw-600 font-lg-18 ${mobiletablestyle.tabledata}`}
                          >
                            Inversión inicial
                          </Typography>
                        </TableCell>
                        <TableCell
                          className={mobiletablestyle.tablecell_heading2}
                          align="right"
                        >
                          <Typography
                            style={{ color: "#182849" }}
                            className={`font-lg-18 fw-600 ${mobiletablestyle.tabledata}`}
                          >
                            {data.price1}
                            <span
                              className={`font-lg-18 ${mobiletablestyle.fade_text}`}
                            >
                              {data.price2}
                            </span>
                          </Typography>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          <Typography
                            style={{
                              color: "#587BC8",
                              textTransform: "uppercase",
                            }}
                            className={`font-lg-18 ${mobiletablestyle.tabledata}`}
                          >
                            Cuotas
                          </Typography>
                          <Typography
                            style={{
                              color: "#587BC8",
                              textTransform: "uppercase",
                            }}
                            className={`font-lg-18 ${mobiletablestyle.tabledata}`}
                          >
                            Valor Cuota
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography
                            className={`font-lg-18 ${mobiletablestyle.tabledata}`}
                          >
                            {data.quota}
                          </Typography>
                          <Typography
                            className={`font-lg-18 ${mobiletablestyle.tabledata}`}
                          >
                            {data.avgquota}
                            <span
                              className={`font-lg-18 ${mobiletablestyle.fade_text}`}
                            >
                              {data.finalprice}
                            </span>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
        </TabPanel>

        <TabPanel value={value} index={1}></TabPanel>
      </Grid>

      <TablePagination
        className="pagination"
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Mobileversiontable;
