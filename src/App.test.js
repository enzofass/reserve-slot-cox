import { render, screen } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Timeslots from "./components/Timeslot/timeslots";
import Modal from "./components/Modal/modals";

configure({ adapter: new Adapter() });

describe("App", () => {
  // Heading renders
  it("renders heading", () => {
    render(<App />);
    expect(
      screen.getByText("Please click a timeslot from below to reserve:")
    ).toBeInTheDocument();
  });

  const wrapper = shallow(<App />);
  // Modal visibility when button is clicked
  it("modal is visible when button clicked", () => {
    console.log(wrapper);
    // console.log(...baseProps);
    const tsBtn = wrapper.find(["value=9:00am - 10:00am"]); //.simulate("click");
    expect(tsBtn).toBeDefined();
  });

  // Modal is not visible when close btn is pressed

  // Modal is not visible if submit btn is pressed

  // Button is green if owned by is empty

  // Button is red if owned by is not empty

  // When red button is pressed name and phone should be set in state

  // if name or phone is changed  and submitted state should update

  //
});
