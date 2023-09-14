import React from "react";
import { render } from "@testing-library/react";
import PricingSection from "./PricingSection";

test("renders PricingSection component", () => {
   const { getByText, getByTestId } = render(<PricingSection />);

   // Check for specific text content
   expect(getByText("Pricing Plans")).toBeInTheDocument();
   expect(
      getByText(
         "When it comes to choosing the right Price, we know how easy it is to get overwhelmed with the number."
      )
   ).toBeInTheDocument();

   // Test for the presence of specific links using data-testid
   const buyPlanBtnLink = getByTestId("buyPlanBtn");
   expect(buyPlanBtnLink).toBeInTheDocument();
   expect(buyPlanBtnLink).toHaveAttribute("href", "/payment");
});
