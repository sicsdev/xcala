import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function  DialogBox(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title light-blue" className="text-center fw-600 mt-3">
          {props.modal_title}
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='light-blue mt-3'>
          <div dangerouslySetInnerHTML={{__html:props.modal_content}} ></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{justifyContent:"center"}}>
          <Button onClick={handleClose} className='button-primary'>{props.action_btn}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;