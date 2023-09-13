import React from "react";
import { render } from "@testing-library/react";
import SchedulingFeatures from "./SchedulingFeatures";
import UserDocs from "./UserDocs";

test("renders SchedulingFeatures component", () => {
  const { getByText, getByAltText } = render(<SchedulingFeatures />);
  
   expect(getByText("MeetPlanr FEATURES")).toBeInTheDocument();
   expect(getByAltText("Scheduling image")).toBeInTheDocument();
});

test("renders UserDocs component", () => {
  const { getByText } = render(<UserDocs />);
  
   expect(getByText("AN INTRODUCTION TO MeetPlanr")).toBeInTheDocument();
});
