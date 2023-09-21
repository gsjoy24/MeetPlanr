import React from "react";
import { render } from "@testing-library/react";
import ProfessionalServices from "./ProfessionalServices";

test("renders ProfessionalServices component", () => {
   const { getByText, getByTestId } = render(<ProfessionalServices />);

   // Check for specific text content
   expect(getByText("MeetPlanr for professional services")).toBeInTheDocument();
   expect(
      getByText("Provide premium customer service for your clients")
   ).toBeInTheDocument();
   expect(
      getByText(
         "Increase the scheduling process from booking to follow-up and make it simple for your team to concentrate on advancing client work."
      )
   ).toBeInTheDocument();
   expect(getByText("Why MeetPlanr")).toBeInTheDocument();
   expect(
      getByText("A time management system created with professionals")
   ).toBeInTheDocument();

   // Test for the presence of specific links using data-testid
   const createEventLink = getByTestId("createEvent");
   expect(createEventLink).toBeInTheDocument();
   expect(createEventLink).toHaveAttribute("href", "/my-account");
});

test("renders ProfessionalServices component with data-testid attributes", () => {
   const { getByTestId } = render(<ProfessionalServices />);

   // Select images by their data-testid attributes
   expect(getByTestId("Image1")).toBeInTheDocument();
   expect(getByTestId("Image2")).toBeInTheDocument();
   expect(getByTestId("Image3")).toBeInTheDocument();
   expect(getByTestId("Image4")).toBeInTheDocument();
   expect(getByTestId("Image5")).toBeInTheDocument();
   expect(getByTestId("Image6")).toBeInTheDocument();
   expect(getByTestId("Image7")).toBeInTheDocument();
   expect(getByTestId("Image8")).toBeInTheDocument();
});
