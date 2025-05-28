import { describe, it, expect } from "vitest";
import { cn, formatDate, slugify, truncate } from "@/lib/utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      const result = cn("text-red-500", "bg-blue-500");
      expect(result).toContain("text-red-500");
      expect(result).toContain("bg-blue-500");
    });

    it("handles conditional classes", () => {
      const result = cn("base-class", {
        "conditional-class": true,
        "hidden-class": false,
      });
      expect(result).toContain("base-class");
      expect(result).toContain("conditional-class");
      expect(result).not.toContain("hidden-class");
    });
  });

  describe("formatDate", () => {
    it("formats date string correctly", () => {
      const result = formatDate("2025-05-28");
      expect(result).toBe("28 maggio 2025");
    });

    it("formats Date object correctly", () => {
      const date = new Date("2025-05-28");
      const result = formatDate(date);
      expect(result).toBe("28 maggio 2025");
    });
  });

  describe("slugify", () => {
    it("converts text to slug", () => {
      const result = slugify("Hello World!");
      expect(result).toBe("hello-world");
    });

    it("handles special characters", () => {
      const result = slugify("AI-First & Regenerative Reboot");
      expect(result).toBe("ai-first-regenerative-reboot");
    });

    it("handles multiple spaces", () => {
      const result = slugify("Multiple   Spaces");
      expect(result).toBe("multiple-spaces");
    });
  });

  describe("truncate", () => {
    it("truncates long text", () => {
      const text = "This is a very long text that should be truncated";
      const result = truncate(text, 20);
      expect(result).toBe("This is a very long...");
    });

    it("returns original text if shorter than limit", () => {
      const text = "Short text";
      const result = truncate(text, 20);
      expect(result).toBe("Short text");
    });

    it("handles exact length", () => {
      const text = "Exactly twenty chars";
      const result = truncate(text, 20);
      expect(result).toBe("Exactly twenty chars");
    });
  });
});
