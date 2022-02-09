import React, { useState } from 'react';
import Styled from '../../Pages/my-account/MyAccount.module.scss';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Customselect from '../UI/select';
import Button from '../UI/Button';
function BankInfo() {
  const [bankDetail, setBankDetail] = useState(true)
  const saveBankDetail = () => {
    setBankDetail((prevState => !prevState))
  }
  const [bankField, setBankField] = useState({
    bank: "Banco de Chile",
    account_type: "Cuenta Corriente",
    number: "111111111111111111",
  })
  const getBankField = (event) => {
    if (event.target.id === "bank-name") {
      setBankField((field) => {
        return {
          ...field,
          bank:event.target.value
        }
      })
    }
    else if (event.target.id === "account-type") {
      setBankField((field) => {
        return {
          ...field,
          account_type:event.target.value
        }
      })
    }
    else if (event.target.id === "bank-no") {
      setBankField((field) => {
        return {
          ...field,
          number:event.target.value
        }
      })
    }
  }

  return <div>
    {bankDetail ?
      <>
        <form>
          <div className={Styled.fields}>
            <Customselect
              label="Banco"
              Labelid="Banco"
              placholder="Banco"
              Selectid="Banco"
              menuItems={bankField.bank}
              id="bank-name"
              onChange={getBankField}
            />
          </div>
          <div className={Styled.fields}>
            <Customselect
              label="Tipo de cuenta"
              Labelid="Tipo de cuenta"
              placholder="Tipo de cuenta"
              Selectid="Tipo de cuenta"
              menuItems={bankField.account_type}
              id="account-type"
              onChange={getBankField}
            />
          </div>
          <div className={Styled.fields}>
            <TextField
              fullWidth
              id="bank-no"
              label="No. de cuenta"
              variant="standard"
              type="number"
              name="111111111111111111"
              value={bankField.number}
              onChange={getBankField}
            />
          </div>
          <div className='action-btn'>
            <div className={Styled.fields}>
              <Button type="submit" className="button-primary " onClick={saveBankDetail}>Guardar</Button>
            </div>
            <div className={Styled.fields}>
              <Button type="button" className="button-secondary-outline " >Descartar</Button>
            </div>
          </div>
        </form>
      </>
      :
      <>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Banco </Typography>
          <Typography className='light-blue'> {bankField.bank} </Typography>
        </div>
        <div className={Styled.readable_field}>
          <Typography className='light-grey'> Tipo de Cuenta </Typography>
          <Typography className='light-blue'>  {bankField.account_type} </Typography>
        </div>

        <div className={Styled.readable_field}>
          <Typography className='light-grey'> No. de Cuenta </Typography>
          <Typography className='light-blue'>  {bankField.number} </Typography>
        </div>

      </>
    }
  </div>;
}
export default BankInfo;
