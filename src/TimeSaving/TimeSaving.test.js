import TimeSaving from "@/TimeSaving/TimeSaving";
import { render, screen } from "@testing-library/react";

describe("TimeSaving Component Rendering", () => {
   it("renders the TimeSaving component", () => {
      render(<TimeSaving />);
      expect(
         screen.getByText("Discover time-saving solutions to boost team output")
      ).toBeInTheDocument();
   });
});
