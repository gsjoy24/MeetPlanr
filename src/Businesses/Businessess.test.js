import React from "react";
import { render } from "@testing-library/react";
import Businesses from "./Businesses"; // Adjust the import path as needed

describe("Businesses Component", () => {
   it("should render without errors", () => {
      const { getByText, getByTestId } = render(<Businesses />);

      // Test for the presence of specific text
      expect(getByText("MEETPLANR FOR TEAMS & INDUSTRIES")).toBeInTheDocument();
      expect(
         getByText("Enhanced planning for the entire team")
      ).toBeInTheDocument();
      expect(
         getByText("The innovator in group scheduling")
      ).toBeInTheDocument();

      // Test for the presence of specific links using data-testid
      const createEventLink = getByTestId("createEvent");
      expect(createEventLink).toBeInTheDocument();
     expect(createEventLink).toHaveAttribute("href", "/my-account");
     
      const learnMoreLink = getByTestId("learnMore");
      expect(learnMoreLink).toBeInTheDocument();
      expect(learnMoreLink).toHaveAttribute("href", "/pricing");

      // Test for the presence of specific images using data-testid
      expect(getByTestId("image1")).toBeInTheDocument();
      expect(getByTestId("image2")).toBeInTheDocument();
      expect(getByTestId("image3")).toBeInTheDocument();
      expect(getByTestId("image4")).toBeInTheDocument();
      expect(getByTestId("image5")).toBeInTheDocument();
      expect(getByTestId("image6")).toBeInTheDocument();
   });
});
