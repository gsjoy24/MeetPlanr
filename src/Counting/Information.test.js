import React from "react";
import { render } from "@testing-library/react";
import Information from "./Information";

describe("Information Component", () => {
   // Test 1: Check if the Information component renders without errors
   it("renders without errors", () => {
      render(<Information />);
   });

   // Test 2: Check if the Information component displays the correct section title
   it("Displays the correct section title", () => {
      // Render the Information component
      const { getByText } = render(<Information />);
      
    
      expect(getByText("Global Trust")).toBeInTheDocument();
   });
});
