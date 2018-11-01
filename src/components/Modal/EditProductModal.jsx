import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import modalStyle from "assets/jss/material-dashboard-pro-react/modalStyle.jsx";
import React from "react";
import EditForm from "views/Forms/EditProductForm";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes, open, onClose, item, ...other } = this.props;
    return (
      <div>
        <Dialog
          fullWidth
          open={open}
          classes={{
            root: classes.auto
          }}
          TransitionComponent={Transition}
          keepMounted
          onClose={onClose}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
          {...other}
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={onClose}
            >
              <Close className={classes.modalClose} />
            </IconButton>
            <h4 className={classes.modalTitle}>Edit Product Details</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
            <EditForm item={item} onClose={onClose} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(Modal);
