import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the main heading", () => {
    render(<HomePage />);
    
    const heading = screen.getByRole("heading", {
      name: /generative ai gets the hype/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it("renders the hero description", () => {
    render(<HomePage />);
    
    const description = screen.getByText(/integration agency for generative ai/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the get started button", () => {
    render(<HomePage />);
    
    const ctaButton = screen.getByRole("button", {
      name: /get started/i,
    });
    
    expect(ctaButton).toBeInTheDocument();
  });

  it("renders the services section", () => {
    render(<HomePage />);
    
    const servicesHeading = screen.getByRole("heading", {
      name: /our services/i,
    });
    
    expect(servicesHeading).toBeInTheDocument();
  });

  it("renders AI Strategy service", () => {
    render(<HomePage />);
    
    const strategyService = screen.getByText(/ai strategy & consulting/i);
    expect(strategyService).toBeInTheDocument();
  });

  it("renders newsletter signup", () => {
    render(<HomePage />);
    
    const newsletterHeading = screen.getByRole("heading", {
      name: /stay ahead with ai insights/i,
    });
    
    expect(newsletterHeading).toBeInTheDocument();
  });
}); 