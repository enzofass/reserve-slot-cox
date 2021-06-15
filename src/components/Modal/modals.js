import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-modal";

// Custome styles for react modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Modals extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phoneNumber: "",
    };
  }
  componentDidMount() {
    Modal.setAppElement("body");
  }

  componentDidUpdate(prevProps) {
    // compare props if different set state
    if (this.props.popName !== prevProps.popName) {
      this.setState({
        name: this.props.popName,
        phoneNumber: this.props.popPhone,
      });
    }
  }

  // handles name input change
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  // handles phone input change
  handlePhoneChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  // on submit send data back to parent component to update state
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getData({
      id: this.props.popId,
      name: this.state.name,
      phone: this.state.phoneNumber,
    });
    this.setState({ name: "", phoneNumber: "" });
  };

  render() {
    return (
      <div className={"modal-dialog modal-dialog-centered"}>
        <Modal isOpen={this.props.isOpen} style={customStyles}>
          <div className={"col-md-12"}>
            <div className="modal-header">
              <h5>Enter your Name and Phone Number to Reserve this timeslot</h5>
            </div>
            <form
              onSubmit={this.handleSubmit}
              className={"modal-body container my-3"}
            >
              <label className={"row"}>
                Name:
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </label>
              <label className={"row"}>
                Phone Number:
                <input
                  name="phone"
                  type="tel"
                  placeholder="404-123-1234"
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneChange}
                />
              </label>
              <input
                type="submit"
                value="Submit"
                className={"btn btn-primary mt-2"}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              onClick={this.props.handleClose}
              className={"btn btn-secondary"}
            >
              Close Modal
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Modals;
