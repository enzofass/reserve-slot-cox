import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modals from "../Modal/modals";

class Timeslots extends Component {
  constructor() {
    super();
    this.state = {
      timeslots: [
        {
          id: 1,
          name: "9am",
          displayName: "9:00am - 10:00am",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 2,
          name: "10am",
          displayName: "10:00am - 11:00am",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 3,
          name: "11am",
          displayName: "11:00am - 12:00pm",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 4,
          name: "12pm",
          displayName: "12:00pm - 1:00pm",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 5,
          name: "1pm",
          displayName: "1:00pm - 2:00pm",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 6,
          name: "2pm",
          displayName: "2:00pm - 3:00pm",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 7,
          name: "3pm",
          displayName: "3:00pm - 4:00pm",
          bookedBy: { name: "", phone: "" },
        },
        {
          id: 8,
          name: "4pm",
          displayName: "4:00pm - 5:00pm",
          bookedBy: { name: "", phone: "" },
        },
      ],
      showModal: false,
      fullName: "",
      phoneNumber: "",
      id: "",
    };
  }

  // trigger pop-up modal and set state so we can pass data to modal
  handleModal = (e, id) => {
    let index = id - 1;

    const bookedBy = this.state.timeslots[index].bookedBy;
    this.setState({
      showModal: true,
      id: id,
      fullName: bookedBy.name,
      phoneNumber: bookedBy.phone,
    });
  };

  // handles closing of he modal from child modal
  handleClose = () => {
    this.setState({ showModal: false });
  };

  // updates state with data received from modal
  updateData = (data) => {
    this.setState({ showModal: false });

    this.setState((prevState) => ({
      timeslots: prevState.timeslots.map((obj) =>
        obj.id === data.id
          ? Object.assign(obj, {
              bookedBy: { name: data.name, phone: data.phone },
            })
          : obj
      ),
    }));
  };

  render() {
    return (
      <div className={"col-md-12"}>
        <h2>Please click a timeslot from below to reserve:</h2>
        <div className={"container my-3"}>
          {this.state.timeslots.map((timeslot) => (
            <div key={timeslot.id} className={"row"}>
              <button
                key={timeslot.id}
                onClick={(e) => this.handleModal(e, timeslot.id)}
                className={
                  this.state.timeslots[timeslot.id - 1].bookedBy.name !== "" ||
                  this.state.timeslots[timeslot.id - 1].bookedBy.phone !== ""
                    ? "btn btn-danger mb-1 btn-block"
                    : "btn btn-success mb-1 btn-block"
                }
              >
                {timeslot.displayName}
              </button>
            </div>
          ))}
          <Modals
            isOpen={this.state.showModal}
            popId={this.state.id}
            popName={this.state.fullName}
            popPhone={this.state.phoneNumber}
            handleClose={this.handleClose}
            getData={this.updateData}
          />
        </div>
      </div>
    );
  }
}

export default Timeslots;
