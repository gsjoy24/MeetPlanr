import "jest-canvas-mock";
import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner Component Rendering", () => {
   it("should render the Banner component", () => {
      const { getByText } = render(<Banner />);

      // Replace these assertions with actual test criteria based on your component's behavior
      expect(
        getByText("MeetPlanr Appointment Scheduling")
      ).toBeInTheDocument();
      expect(
         getByText(
            "MeetPlanr is the most flexible, comprehensive appointment scheduling software for professionals, SMEs, and enterprises."
         )
      ).toBeInTheDocument();
   });
});
