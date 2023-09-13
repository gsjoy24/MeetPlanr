import React from "react";
import { render } from "@testing-library/react";
import Information from "./Information";

describe("Information Component", () => {
   it("renders without errors", () => {
      render(<Information />);
   });

   it("Displays the correct section title", () => {
      const { getByText } = render(<Information />);
      expect(getByText("Global Trust")).toBeInTheDocument();
   });
});
