import React from "react";
import { render } from "@testing-library/react";
import SchedulingFeatures from "./SchedulingFeatures";
import UserDocs from "./UserDocs";

test("renders SchedulingFeatures component", () => {
   const { getByText, getByAltText, getByTestId } = render(<SchedulingFeatures />);

   expect(getByText("MeetPlanr FEATURES")).toBeInTheDocument();
   expect(getByAltText("Scheduling image")).toBeInTheDocument();

   // Test for the presence of specific links using data-testid
   const UserSignUpLink = getByTestId("UserSignUp");
   expect(UserSignUpLink).toBeInTheDocument();
   expect(UserSignUpLink).toHaveAttribute("href", "/sign-up");
});

test("renders UserDocs component", () => {
  const { getByText } = render(<UserDocs />);
  
  expect(getByText("AN OVERVIEW OF MEETPLANR")).toBeInTheDocument();
});
