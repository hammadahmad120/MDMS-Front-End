import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModalWrapper = ({
  maxWidth = "md",
  openModal,
  modalTitle,
  onModalClose,
  children,
}) => {
  return (
    <Dialog
      open={openModal}
      onClose={onModalClose}
      scroll="paper"
      fullWidth={true}
      maxWidth={maxWidth}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-body"
    >
      <DialogTitle id="scroll-dialog-title">{modalTitle}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalWrapper;
