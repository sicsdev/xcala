import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox } from '@mui/material';
function DialogBox(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <>

      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={props.class}
      >
        <DialogTitle id="alert-dialog-title light-blue" className="text-center fw-600 mt-3">
          {props.modal_title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className="close-modal-btn"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='light-blue mt-3'>
            {props.action_btn2 && (
              <Checkbox />
            )}
            <span dangerouslySetInnerHTML={{ __html: props.modal_content }} ></span>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          {props.action_btn2 && (
            <Button onClick={handleClose} className='light-button-primary'>{props.action_btn2}</Button>
          )}
          <Button onClick={handleClose} className='button-primary'>{props.action_btn}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogBox;