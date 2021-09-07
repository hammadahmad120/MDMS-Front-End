import React, { Component } from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import Dashboard from "../../components/dashboard";
import Header from "../../components/donations/Header";
import { withStyles } from "@material-ui/core/styles";
import DonerFormModal from "../../components/donations/DonerFormModal";
import DonationFormModal from "../../components/donations/DonationFormModal";
import moment from "moment";
import {
  getAllDonation,
  getAllDoners,
  createNewDoner,
  addNewDonation,
  deleteDonation,
  deleteDoner,
  updateDoner,
  updateDonation,
} from "../../services/donationServices";
import CustomDataGrid from "../../components/donations/CustomDataGrid";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Alert } from "@material-ui/lab";
const useStyles = (theme) => ({
  root: {
    margin: "5px 0 25px 0",
  },
  gridRoot: {
    marginTop: "20px",
  },
});

class Donations extends Component {
  state = {
    donations: [],
    doners: [],
    openDonerModal: false,
    editDoner: null,
    openDonationModal: false,
    editDonation: null,
    message: "",
    alertType: "",
  };

  loadResourses = (doners, donations) => {
    if (donations)
      getAllDonation()
        .then((res) => {
          this.setState({
            donations: res.data.data,
          });
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
    if (doners)
      getAllDoners()
        .then((res) => {
          this.setState({
            doners: res.data.data,
          });
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
  };
  componentDidMount() {
    console.log(
      "xx",
      moment("2021-08-20T15:55:45.991Z", "YYYY-MM-DD hh:mm:ss").format(
        "DD-MM-YYYY hh:mm:ss A"
      )
    );
    this.loadResourses(true, true);
  }

  showAlert(message, alertType) {
    if (!this.state.message)
      this.setState({ message, alertType }, (state) => {
        setTimeout(() => {
          this.setState({ alertType: "", message: "" });
        }, 3000);
      });
  }

  handleSaveDoner = (donerData) => {
    if (this.state.editDoner)
      updateDoner(this.state.editDoner.id, donerData)
        .then((res) => {
          this.loadResourses(true, true);
          this.setState({ openDonerModal: false, editDoner: null });
          this.showAlert("Doner updated successfully", "success");
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
    else
      createNewDoner(donerData)
        .then((res) => {
          this.loadResourses(true, true);
          this.setState({ openDonerModal: false });
          this.showAlert("Doner added successfully", "success");
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
  };

  handleSaveDonation = (donationData) => {
    if (this.state.editDonation)
      updateDonation(this.state.editDonation.id, donationData)
        .then((res) => {
          this.loadResourses(false, true);
          this.setState({ openDonationModal: false, editDonation: null });
          this.showAlert("Donation updated successfully", "success");
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
    else
      addNewDonation(donationData)
        .then((res) => {
          this.loadResourses(false, true);
          this.setState({ openDonationModal: false });
          this.showAlert("Donation added successfully", "success");
        })
        .catch((err) => {
          this.showAlert("Something went wrong", "error");
        });
  };

  handleDeleteDoner = (donerId) => {
    deleteDoner(donerId)
      .then((res) => {
        this.showAlert("Doner deleted successfully", "success");
        this.loadResourses(true, false);
      })
      .catch((err) => {
        if (err.response.data && err.response.data.errors.length)
          this.showAlert(err.response.data.errors[0], "error");
        else this.showAlert("Something went wrong", "error");
      });
  };

  handleDeleteDonation = (donationId) => {
    deleteDonation(donationId)
      .then((res) => {
        this.showAlert("Donation deleted successfully", "success");
        this.loadResourses(false, true);
      })
      .catch((err) => {
        this.showAlert("Something went wrong", "error");
      });
  };

  handleEditDoner = (doner) => {
    this.setState({ editDoner: doner, openDonerModal: true });
  };
  handleEditDonation = (donation) => {
    this.setState({ editDonation: donation, openDonationModal: true });
  };

  render() {
    const { classes } = this.props;

    const headerButtons = [
      <Button
        variant='outlined'
        color='primary'
        onClick={() => this.setState({ openDonerModal: true })}
      >
        Add Doner
      </Button>,
      <Button
        variant='outlined'
        color='primary'
        onClick={() => this.setState({ openDonationModal: true })}
      >
        Add Donation
      </Button>,
    ];

    const donersColumns = [
      {
        field: "name",
        headerName: "Name",
        type: "string",
        width: 200,
      },
      {
        field: "cnic",
        headerName: "CNIC",
        type: "string",
        width: 200,
      },
      {
        field: "address",
        headerName: "Address",
        width: 200,
      },
      {
        field: "phone",
        headerName: "Phone No",
        width: 200,
      },
      {
        field: "createdAt",
        headerName: "Added on",
        width: 200,
        renderCell: (cell) => {
          // console.log("xx", cell.value);
          return (
            <div>
              {moment(cell.value, "YYYY-MM-DD hh:mm:ss").format(
                "DD-MM-YYYY hh:mm:ss A"
              )}
            </div>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,

        renderCell: (cellData) => (
          <Box marginLeft={3}>
            <IconButton
              onClick={() => {
                confirmAlert({
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: () => this.handleDeleteDoner(cellData.row.id),
                    },
                    {
                      label: "No",
                      onClick: () => {},
                    },
                  ],
                });
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                this.handleEditDoner(cellData.row);
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        ),
      },
    ];

    const donationsColumns = [
      {
        field: "DonationPerson.name",
        headerName: "Donation By",
        type: "string",
        width: 200,
      },
      {
        field: "DonationPerson.cnic",
        headerName: "CNIC",
        type: "string",
        width: 200,
      },
      {
        field: "description",
        headerName: "Description",
        width: 200,
      },
      {
        field: "amount",
        headerName: "Amount",
        width: 200,
      },
      {
        field: "DonationPerson.createdAt",
        headerName: "Date",
        width: 200,
        renderCell: (cell) => {
          return (
            <div>
              {moment(cell.value, "YYYY-MM-DD hh:mm:ss").format(
                "DD-MM-YYYY hh:mm:ss A"
              )}
            </div>
          );
        },
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,

        renderCell: (cellData) => (
          <Box marginLeft={3}>
            <IconButton
              onClick={() => {
                confirmAlert({
                  message: "Are you sure to do this.",
                  buttons: [
                    {
                      label: "Yes",
                      onClick: () => this.handleDeleteDonation(cellData.row.id),
                    },
                    {
                      label: "No",
                      onClick: () => {},
                    },
                  ],
                });
              }}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                this.handleEditDonation(cellData.row);
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        ),
      },
    ];

    return (
      <div>
        {this.state.openDonerModal && (
          <DonerFormModal
            open={this.state.openDonerModal}
            editDoner={this.state.editDoner}
            handleClose={() =>
              this.setState({ openDonerModal: false, editDoner: null })
            }
            handleSubmit={this.handleSaveDoner}
          />
        )}
        {this.state.openDonationModal && (
          <DonationFormModal
            open={this.state.openDonationModal}
            doners={this.state.doners}
            editDonation={this.state.editDonation}
            handleClose={() =>
              this.setState({ openDonationModal: false, editDonation: null })
            }
            handleSubmit={this.handleSaveDonation}
          />
        )}
        <Dashboard>
          <Container className={classes.root}>
            {this.state.message && (
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={true}
                onClose={() => {}}
              >
                <Alert onClose={() => {}} severity={this.state.alertType}>
                  {this.state.message}
                </Alert>
              </Snackbar>
            )}

            <Grid container>
              <Grid item xs={12}>
                <Header title='Manage Donations' buttons={headerButtons} />
              </Grid>
              <Grid item xs={12}>
                <CustomDataGrid
                  title={"Donations"}
                  data={this.state.donations}
                  columns={donationsColumns}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomDataGrid
                  title={"Doners"}
                  data={this.state.doners}
                  columns={donersColumns}
                />
              </Grid>
            </Grid>
          </Container>
        </Dashboard>
      </div>
    );
  }
}
export default withStyles(useStyles)(Donations);
