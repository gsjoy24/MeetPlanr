import React from "react";
import { render, screen } from "@testing-library/react";
import Marketing from "./Marketing";

test("renders Marketing component", () => {
   render(<Marketing />);

   // Check for text content
   expect(screen.getByText("MARKETING TEAMS")).toBeInTheDocument();
   expect(
      screen.getByText("Convert leads to meetings – faster")
   ).toBeInTheDocument();

   // Check for images by alt attributes
   const marketingImage = screen.getAllByAltText("Marketing Image");
   expect(marketingImage.length).toBeGreaterThan(0); // Ensure there's at least one image with this alt text

   const calenderImages = screen.getAllByAltText("Calender");
   expect(calenderImages.length).toBe(2); // Ensure there are two images with this alt text
});
