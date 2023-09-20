import React from "react";
import { render, screen } from "@testing-library/react";
import Marketing from "./Marketing";

test("renders Marketing component", () => {
   const { getByTestId } = render(<Marketing />);

   // Check for text content
   expect(screen.getByText("MARKETING TEAMS")).toBeInTheDocument();
   expect(
      screen.getByText("Faster changing leads into meetings")
   ).toBeInTheDocument();

   // Test for the presence of specific links using data-testid
   const createEventLink = getByTestId("createEvent");
   expect(createEventLink).toBeInTheDocument();
  expect(createEventLink).toHaveAttribute("href", "/my-account");
  
   const UserSignUpLink = getByTestId("UserSignUp");
   expect(UserSignUpLink).toBeInTheDocument();
   expect(UserSignUpLink).toHaveAttribute("href", "/sign-up");

   // Check for images by alt attributes
   const marketingImage = screen.getAllByAltText("Marketing Image");
   expect(marketingImage.length).toBeGreaterThan(0); // Ensure there's at least one image with this alt text

   const calenderImages = screen.getAllByAltText("Calender");
   expect(calenderImages.length).toBe(2); // Ensure there are two images with this alt text
});
