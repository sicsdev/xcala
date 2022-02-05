import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Styles from "../Header/Header.module.scss";
import ImagSrc from "../../../notification.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from '@mui/icons-material/Close';
const pages = ["Inicio", "Productos", "Mis transacciones"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileMenu, setmobileMenu] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setmobileMenu((prevState => !prevState))
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setmobileMenu((prevState => !prevState))
  };

  return (
    <AppBar position="static" className={Styles.app_header}>
      <Container maxWidth="lg" className={Styles.header_wrapper}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            <div className="xcala-logo-layout">
              <Link to="/new-user">
                <img src="/assets/images/logo.svg" alt="logo"></img>
              </Link>
            </div>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link to="/new-user" sx={{ my: 2, color: "white", display: "block" }} >
              Inicio
            </Link>
            <Link to="/products" sx={{ my: 2, color: "white", display: "block" }} >
              Productos
            </Link>
            <Link to="/lets-start" sx={{ my: 2, color: "white", display: "block" }} >
              Mis transacciones
            </Link>
            <Link to="/my-notification" className={Styles.notification} sx={{ my: 2, color: "white", display: "block" }} >
              <img src={ImagSrc} alt="icon"></img>
              <span></span>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }} >
            <div className={Styles.dropdown_profile} onClick={handleOpenUserMenu}>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/assets/images/Avatar.svg" />
              </IconButton>
              Mi cuenta
            </div>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="#1E22AA">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        <div className={Styles.mobile_menu}>
          <div className='desktop-none'>
            <Link to="/my-notification" className={Styles.notification} sx={{ my: 2, color: "white", display: "block" }} >
              <img src={ImagSrc} alt="icon"></img>
              <span></span>
            </Link>
          </div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          {mobileMenu ?
            <div className={Styles.mobile_menu_content}>
              <div className={Styles.mobile_items}>
                <div className={Styles.mobile_heading}>
                  <Typography className='museo-regular font-lg-24 blue_text'>
                    Filtros
                  </Typography>
                  <Typography >
                    <CloseIcon className='blue_text' onClick={handleCloseUserMenu} />
                  </Typography>
                </div>
                <Link to="/new-user"  >
                  Inicio
                </Link>
                <Accordion className={Styles.mobile_accordion} style={{ boxShadow: "none" }}>
                  <AccordionSummary
                    style={{ padding: "0px" }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                  >
                    <Typography
                      className="p-18"
                      variant=""
                      component=""
                      style={{ fontWeight: "600" }}
                    >
                      Perfil de inversión
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={Styles.user_detail}>
                      <Link to="" >
                        Mis datos
                      </Link>
                      <Link to=""  >
                        Mi perfil de riesgo
                      </Link>
                      <Link to=""  >
                        Mis objetivos e intereses
                      </Link>
                      <Link to=""  >
                        Cambiar contraseña
                      </Link>
                      <Link to=""  >
                        Configurar notificaciones
                      </Link>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Link to="/products"  >
                  Productos
                </Link>
                <Link to="/lets-start"  >
                  Mis transacciones
                </Link>
              </div>
            </div>
            : ''}
        </div>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
