import { Container, Grid, Link, Switch, Typography } from '@mui/material';
import React, { useState } from 'react';
import Styled from "../my-notifcation/My-Notification.module.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Data from '../../data/message.json';
function MyNotification() {
  const [data, setData] = useState(Data);
  // const [alldata, setAllData] = useState(Data);
  const handleRemove = (key) => {
    const newArr = data.filter((singledata) => {
      if (key !== singledata.id) {
        return singledata;
      }
    })
    // console.log("newArr", newArr);
    setData(newArr);
  }
  const handleRemoveAll = (e) => {
    e.preventDefault()
    console.log(Data);
    setData()
  }
  return <>
    <div className='page_content pt-lg-45'>
      <div className={Styled.my_notification_main}>
        <Container maxWidth="lg">
          <Typography className='museo-regular font-lg-24'
          >
            <img src="/assets/images/Rectangle.png" alt=""></img>  Mis notificaciones
          </Typography>
          <div className={Styled.my_notification_wrapper}>
            <>
              {data && data.map((element) =>
                <Grid container spacing={2} className={Styled.my_notification_step} key={element.id}>
                  <Grid item md={10} mb={3}>
                    <div className={element.id != 1 ? Styled.my_notification : `active_notification ${Styled.my_notification}`} >
                      <Typography className={`date ${Styled.my_notification_date}`}>
                        {element.date}
                      </Typography>
                      <Typography className={Styled.my_notification_message}>
                        {element.message}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item md={2} mb={3}>
                    <div className={Styled.delete_icon}>
                      <DeleteOutlineIcon className={Styled.delete_icon} id={element.id} onClick={(e) => handleRemove(element.id)} />
                    </div>
                  </Grid>
                </Grid>
              )}
            </>
            {data &&
              <Grid item md={12} mb={3}>
                <div className={Styled.delete_all}>
                  <Link className="dark-green" onClick={handleRemoveAll}>Eliminar todas</Link>
                </div>
              </Grid>
            }
          </div>
        </Container>
      </div>
    </div >
  </>
}

export default MyNotification;
