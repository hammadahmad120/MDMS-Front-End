import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Fade from "@material-ui/core/Fade";

const AlertMsg = ({
  timeToShow = 5,
  msg = "",
  alertType = "error",
  verticalPosition = "bottom",
  horizontalPosition = "center",
  onCloseCallback,
}) => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <Snackbar
      open
      anchorOrigin={{
        vertical: verticalPosition,
        horizontal: horizontalPosition,
      }}
      autoHideDuration={timeToShow * 1000}
      onClose={onCloseCallback}
      TransitionComponent={Fade}
    >
      <Alert onClose={onCloseCallback} severity={alertType}>
        {msg}
      </Alert>
    </Snackbar>
  );
};
export default AlertMsg;

//Usage
/*
{this.state.showErrorAlert && (
                    <ErrorAlert
                      timeToShow={3}
                      onCloseCallback={() => {
                        this.setState({ showErrorAlert: false });
                      }}
                    />
                  )}
*/
