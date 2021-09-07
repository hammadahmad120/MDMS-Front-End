import React from "react";

const ConfirmationModal = ({
  heading,
  subHeading,
  closeModal,
  onConfirm,
  buttonText,
  disableButton,
}) => {
  return (
    <div
      className="confirmation-modal generic-modal-wrapper"
      id="RemoveProjectModal"
      tabIndex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title font-bold" id="deleteModalLabel">
              {heading}
            </h5>
          </div>
          <div className="modal-body">
            <span className="text-lighterGreyColor font-roboto">
              {subHeading}
            </span>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-primary btn-cancel font-medium font-roboto"
              onClick={closeModal}
              disabled={disableButton ? true : false}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary font-medium font-roboto"
              onClick={onConfirm}
              disabled={disableButton ? true : false}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
