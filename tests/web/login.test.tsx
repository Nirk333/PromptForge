// /tests/web/login.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from "../../src/web/app/login/page";

describe("LoginPage", () => {
  it("renders Google and Facebook auth buttons", () => {
    render(<LoginPage />);
    expect(screen.getByText(/continue with google/i)).toBeInTheDocument();
    expect(screen.getByText(/continue with facebook/i)).toBeInTheDocument();
  });
});
