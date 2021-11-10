import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main Component", () => {
  it("Should show title bank", () => {
    render(<App />);
    expect(screen.getByText("ByteBank")).toBeInTheDocument();
  });
});
