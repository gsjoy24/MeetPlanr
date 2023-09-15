import React from "react";
import { render } from "@testing-library/react";
import CustomerSuccess from "./CustomerSuccess";

test("renders CustomerSuccess component", () => {
   const { getByText, getByTestId } = render(<CustomerSuccess />);

   // Check for specific text content
   expect(getByText("CUSTOMER SUCCESS STORIES")).toBeInTheDocument();
   expect(getByText("Customer success is our success")).toBeInTheDocument();

   // Test for the presence of specific links using data-testid
   const createEventLink = getByTestId("createEvent");
   expect(createEventLink).toBeInTheDocument();
   expect(createEventLink).toHaveAttribute("href", "/my-account");

   // Check for specific images by alt attributes
   expect(getByTestId("Image1")).toBeInTheDocument();
   expect(getByTestId("company1")).toBeInTheDocument();
   expect(getByTestId("company2")).toBeInTheDocument();
   expect(getByTestId("company3")).toBeInTheDocument();
   expect(getByTestId("Image2")).toBeInTheDocument();
   expect(getByTestId("Image3")).toBeInTheDocument();
   expect(getByTestId("Image4")).toBeInTheDocument();
   expect(getByTestId("Image5")).toBeInTheDocument();
});
