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
  const [bankDetail, setBandetail] = useState(true)

  const showBankDetail = () => {
    setBandetail(false);
  }
  return <div className="page_content">
    <Container maxWidth="lg">
      <Grid container md={12} mb={5}>
        <Grid item md={12}>
          <div className={Styles.rectangle_heading}>
            <Typography
              variant="h5"
              style={{ fontSize: "28px" }}
            >
              <img src="/assets/images/Rectangle.png" alt=""></img> Mis datos de contacto y depósito
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={Styles.account_card}>
        <Grid container spacing={5} md={12} mb={3}>
          <Grid item md={12} mt={3}>
            <div className={Styles.user_row}>
              <div className={Styles.user_grid}>
                <div className={Styles.user_img}>
                  <img src="/assets/images/Avatar.svg" />
                </div>
                <div className={Styles.user_content}>
                  <Typography
                    variant="h5"
                    style={{ fontSize: "24px" }}
                  >
                    Marcela Paz Pérez Ilabaca
                  </Typography>
                  <Typography
                    className='light-grey'
                    style={{ fontSize: "18" }}
                  >
                    RUT  11.111.111-1
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} mt={3}>
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
                >
                  <EditIcon />Editar
                </Link>
              </div>
              <DataPersonal />
            </div>
          </Grid>
          <Grid item md={4} mt={3}>
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
                >
                  <EditIcon />Editar
                </Link>
              </div>
              <ContactInfo />
            </div>
          </Grid>
          <Grid item md={4} mt={3}>
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
              {bankDetail ?
                <div className=''>
                  <div className={Styles.fields}>
                    <Typography
                    >
                      Aún no has registrado tu cuenta para pago de dividendos y retiros
                    </Typography>
                  </div>
                  <div className={Styles.fields} >
                    <Button type="button" className="button-light " onClick={showBankDetail}>Descartar</Button>
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
