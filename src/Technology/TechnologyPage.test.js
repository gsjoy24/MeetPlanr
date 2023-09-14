import React from "react";
import { render } from "@testing-library/react";
import TechnologyPage from "./Technology";

test("renders TechnologyPage component", () => {
   const { getByText, getByTestId } = render(<TechnologyPage />);

   // Check for specific text content
   expect(getByText("MeetPlanr FOR TECH Industry")).toBeInTheDocument();
   expect(
      getByText("The competitive advantage of scheduling for tech businesses")
  ).toBeInTheDocument();
  
   // Test for the presence of specific links using data-testid
   const createEventLink = getByTestId("createEvent");
   expect(createEventLink).toBeInTheDocument();
   expect(createEventLink).toHaveAttribute("href", "/my-account");

   const UserSignUpLink = getByTestId("UserSignUp");
   expect(UserSignUpLink).toBeInTheDocument();
   expect(UserSignUpLink).toHaveAttribute("href", "/sign-up");
});

test("renders TechnologyPage component with data-testid attributes", () => {
   const { getByTestId } = render(<TechnologyPage />);

   // Select images by their alt attributes
   const img1 = document.querySelector('img[alt="Marketing Image 1"]');
   const img2 = document.querySelector('img[alt="Marketing Image 2"]');
   const img3 = document.querySelector('img[alt="Calendar1"]');
   const img4 = document.querySelector('img[alt="Calendar2"]');
   const img5 = document.querySelector('img[alt="Calendar3"]');

   expect(img1).toBeInTheDocument();
   expect(img2).toBeInTheDocument();
   expect(img3).toBeInTheDocument();
   expect(img4).toBeInTheDocument();
   expect(img5).toBeInTheDocument();

   // Select images by their data-testid attributes
   expect(getByTestId("image1")).toBeInTheDocument();
   expect(getByTestId("image2")).toBeInTheDocument();
   expect(getByTestId("calendarImg1")).toBeInTheDocument();
   expect(getByTestId("calendarImg2")).toBeInTheDocument();
   expect(getByTestId("calendarImg3")).toBeInTheDocument();
});
