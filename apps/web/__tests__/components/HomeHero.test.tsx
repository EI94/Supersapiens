import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomeHero from "@/components/HomeHero";

describe("HomeHero", () => {
  it("renders the main heading", () => {
    render(<HomeHero />);
    
    const heading = screen.getByRole("heading", {
      name: /generative ai gets the hype — you get the cape/i,
    });
    
    expect(heading).toBeInTheDocument();
  });

  it("renders the AI-First message", () => {
    render(<HomeHero />);
    
    const aiFirstText = screen.getByText(/ai-first/i);
    expect(aiFirstText).toBeInTheDocument();
  });

  it("renders the regenerative reboot message", () => {
    render(<HomeHero />);
    
    const rebootText = screen.getByText(/regenerative reboot/i);
    expect(rebootText).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(<HomeHero />);
    
    const ctaButton = screen.getByRole("button", {
      name: /book a vibe-call/i,
    });
    
    expect(ctaButton).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<HomeHero />);
    
    const description = screen.getByText(/supersapiens integra la generative ai/i);
    expect(description).toBeInTheDocument();
  });
}); 