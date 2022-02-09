import React from 'react';
import RecurringStyled from './Recurring-items.module.scss'
import { Typography } from '@mui/material';

function Recurringitems(props) {
  return (
  <div>
        <div className={RecurringStyled.invest_list}>
            <Typography className={RecurringStyled.list_item}>
                {props.title}
            </Typography>
            <img src="/assets/images/right_arrow.svg" alt=""></img>
        </div>
  </div>
  );
}

export default Recurringitems;
