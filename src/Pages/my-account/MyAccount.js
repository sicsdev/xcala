import React, { useState } from 'react';
import Styles from "../../Pages/my-account/MyAccount.module.scss"
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import { Grid, Link } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Button from '../../components/UI/Button';
import DataPersonal from '../../components/data-personal/Data-Personal';
import ContactInfo from '../../components/contact-information/Contact-Information';
import BankInfo from '../../components/bank-infomation/Bank-Information';
function MyAccount() {
  const [personalData, setpersonalData] = useState(true)
  const [contactData, setContactData] = useState(true)
  const [bankData, setBanData] = useState(true)
  const showBankData = () => {
    setBanData((prevState) => !prevState);
  }
  const editPersonalData = () => {
    setpersonalData((prevState) => !prevState)
  }
  const openContact = () => {
    setContactData((prevState) => !prevState)
  }
  return <div className="page_content">
    <Container maxWidth="lg">
      <Grid container item md={12} xs={12} mb={5}>
        <Grid item md={12} xs={12}>
          <div className={Styles.rectangle_heading}>
            <Typography
              variant="h5"
              className='font-lg-28'
            >
              <img src="/assets/images/Rectangle.png" alt=""></img> Mis datos de contacto y depósito
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={Styles.account_card}>
        <Grid container item spacing={5} md={12} xs={12} mb={3}>
          <Grid item md={12} xs={12} mt={3}>
            <div className={Styles.user_row}>
              <div className={Styles.user_grid}>
                <div className={Styles.user_img}>
                  <img src="/assets/images/Avatar.svg" />
                </div>
                <div className={Styles.user_content}>
                  <Typography
                    variant="h5"
                    className='font-lg-24'
                  >
                    Marcela Paz Pérez Ilabaca
                  </Typography>
                  <Typography
                    className='font-lg-18 light-grey'
                  >
                    RUT  11.111.111-1
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12} mt={3}>
            <div className={Styles.account_detail_main}>
              <div className={Styles.account_heading}>
                <Typography
                  variant="h5"
                  style={{ fontSize: "20px", color: "#1E22AA" }}
                >
                  Datos Personales
                </Typography>
                <Link
                  className='light-grey'
                  style={{ fontSize: "18" }}
                  onClick={editPersonalData}
                >
                  <EditIcon />Editar
                </Link>
              </div>
              <DataPersonal personalData={personalData} setpersonalData={setpersonalData} />
            </div>
          </Grid>
          <Grid item md={4} xs={12} mt={3}>
            <div className={Styles.account_detail_main}>
              <div className={Styles.account_heading}>
                <Typography
                  variant="h5"
                  style={{ fontSize: "20px", color: "#1E22AA" }}
                >
                  Datos de Contacto
                </Typography>
                <Link
                  className='light-grey'
                  style={{ fontSize: "18" }}
                  onClick={openContact}
                >
                  <EditIcon />Editar
                </Link>
              </div>
              <ContactInfo contactData={contactData} setContactData={setContactData} />
            </div>
          </Grid>
          <Grid item md={4} xs={12} mt={3}>
            <div className={Styles.account_detail_main}>
              <div className={Styles.account_heading}>
                <Typography
                  variant="h5"
                  style={{ fontSize: "20px", color: "#1E22AA" }}
                >
                  Banco de depósito
                </Typography>
                <Link
                  className='light-grey'
                  style={{ fontSize: "18" }}
                >
                  <EditIcon />Editar
                </Link>
              </div>
              {bankData ?
                <div className=''>
                  <div className={Styles.fields}>
                    <Typography
                    >
                      Aún no has registrado tu cuenta para pago de dividendos y retiros
                    </Typography>
                  </div>
                  <div className={Styles.fields} >
                    <Button type="button" className="button-light " onClick={showBankData}>Agregar mi banco</Button>
                  </div>
                </div>
                :
                <BankInfo />
              }
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div >;
}

export default MyAccount;
