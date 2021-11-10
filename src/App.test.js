import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main Component", () => {
  it("Should show title bank", () => {
    render(<App />);
    expect(screen.getByText("ByteBank")).toBeInTheDocument();
  });
  it("Should show amount", () => {
    render(<App />);
    expect(screen.getByText("Saldo:")).toBeInTheDocument();
  });
  it("Should show btn to submit", () => {
    render(<App />);
    expect(screen.getByText("Realizar operação")).toBeInTheDocument();
  });
});
