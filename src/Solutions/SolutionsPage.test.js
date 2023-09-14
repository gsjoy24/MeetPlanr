import React from "react";
import { render } from "@testing-library/react";
import SolutionsPage from "./SolutionsPage";

test("renders SolutionsPage component", () => {
   const { getByText } = render(<SolutionsPage />);

   expect(getByText("SOLUTIONS")).toBeInTheDocument();
   expect(
      getByText("A scheduling automation solution for")
  ).toBeInTheDocument();
  
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

   // Select images by their data-testid attributes
   expect(getByTestId("image1")).toBeInTheDocument();
   expect(getByTestId("image2")).toBeInTheDocument();
});
