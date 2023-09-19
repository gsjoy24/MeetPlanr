import React from "react";
import { render } from "@testing-library/react";
import SolutionsPage from "./SolutionsPage";

test("renders SolutionsPage component", () => {
   const { getByText } = render(<SolutionsPage />);

   expect(getByText("SOLUTIONS")).toBeInTheDocument();
  
   // Select images by their alt attributes
   const solutionsImage1 = document.querySelector(
      'img[alt="Solutions image 1"]'
   );
   const solutionsImage2 = document.querySelector(
      'img[alt="Solutions image 2"]'
   );

   expect(solutionsImage1).toBeInTheDocument();
   expect(solutionsImage2).toBeInTheDocument();
});

test("renders SolutionsPage component", () => {
   const { getByTestId } = render(<SolutionsPage />);

   // Test for the presence of specific links using data-testid
   const createEventLink = getByTestId("createEvent");
   expect(createEventLink).toBeInTheDocument();
  expect(createEventLink).toHaveAttribute("href", "/my-account");

   // Select images by their data-testid attributes
   expect(getByTestId("image1")).toBeInTheDocument();
   expect(getByTestId("image2")).toBeInTheDocument();
});
