import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
   it("should render the footer content correctly", () => {
      const { getByText } = render(<Footer />);

      // Test for the presence of specific text in the footer
      expect(getByText("About us")).toBeInTheDocument();
      expect(getByText("Contact")).toBeInTheDocument();
      expect(getByText("Pricing")).toBeInTheDocument();
      expect(getByText("Blog")).toBeInTheDocument();
   });
});
