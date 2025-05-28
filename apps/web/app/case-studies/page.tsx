"use client";

import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Case Studies - AI Success Stories",
  description: "Explore real-world AI implementations and success stories from our clients across various industries.",
};

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Sales Assistant",
    category: "Productivity",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCik-Rdz6JMjjI8gQHtYabkZNO-_i1-FgB_5DwraGDjjuJ0dqKeDKzqPyN4YBs4PaGnZTgxplU1NpbNFvUpphZtMGn0O87adWlYp5ALZhborhfXQ7uETod-K4ONGAqyhme0EsGNsqT1P2adGc_PTbAzedI4DKiXVOqOVSf9eeKJqvKqP66H_BxkJ-g95lmxm4rPPicPQMfkO5BoycuoBWUgI6ibVPYGjc0opkhxXsloLS0y6Cr3TrIGp4vX4nyrTuMnYYnkSc5ITCh9"
  },
  {
    id: 2,
    title: "AI-Driven Customer Support",
    category: "Customer Experience",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhE1Es9H9zyrR4O0sLoLA5aSn_2_Y-Fn1452UT8fbCS1grR-QnWVemw8btdqBGqoJ4RW23LydyMckXfLTfKEtwhpemoPk7j-4M8VtBe_9_vJJ7HhGWmFfXbsKDqYYV6ZqorJR3I7qCTiZ03TkjAdENV9bkhQitvgSwZugQsol4oxxMyUaLe4xYHlLiehNY-UJp4cTVU4KuiVH3WbD_WN4RDIl_QvVEwt4nrrtL21pqwA1iJ6OOSnR-Vky86nrwNJTs_PFhHorkyzc8"
  },
  {
    id: 3,
    title: "AI-Enhanced Marketing Campaigns",
    category: "Revenue Growth",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdyJos99wotvRiOJ8evOvwoLlFYKZG7TWTRymKz6cafEe5Z7hZHZq5WVdKLQCZmJNZp5ZRTjNKSlsrVvfHhCzYCKie_aWcDpLYbodpnJHNPNJyUewLjF8ub2cdu_d6YcV_ZkCgouz0GBuOerY0kJVHzLYI1Q0ckrTQBzd7BZeqJCkFPjpMSbxUpOcMHFs-ZIZigktQVxZUdKpM1OReYk7BtmZhEm01hgPyxuuqFQEmhbRDmV0AeCXsLCeuqB4gulNcZMrThs6KV2LN"
  },
  {
    id: 4,
    title: "AI-Optimized Operations",
    category: "Productivity",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsZ_ooWuD9UDigxZkF6MZPJg83wWbodlBs_ZVaLIWwxqZIRGTw20m06AJDWP0NsAaF_rTkxKC2ETXjc2ymS8yl_Jg0tmTtBKeiThQpD2cETvRa422r4GzbT9evawCL_R1jzf2vB_iJPtuEPs8jEsgyZ94vqj7AHHFibLUYcYNj0Q-SrAQDYkR0pBnqjMdqpRijFqdHw05l4yltmA7U7uMo74-IoY6dbXVNrsagA_DlCEGWj8P5lMFNThN_RHWm9E0zEnHujdAk0q7M"
  }
];

const categories = ["All", "Productivity", "Customer Experience", "Revenue Growth"];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setOpenDropdown(null);
  };

  const toggleDropdown = (category: string) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Case Studies
          </p>
        </div>
        
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {categories.map((category) => (
            <div key={category} className="relative">
              <button 
                className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2"
                onClick={() => toggleDropdown(category)}
              >
                <p className="text-[#111418] text-sm font-medium leading-normal">
                  {category}
                </p>
                <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              
              {openDropdown === category && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#f0f2f5] rounded-lg shadow-lg z-10 min-w-[120px]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className="block w-full text-left px-4 py-2 text-sm text-[#111418] hover:bg-[#f0f2f5] first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => handleCategorySelect(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {filteredCaseStudies.map((study) => (
            <div key={study.id} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${study.image}")` }}
              ></div>
              <p className="text-[#111418] text-base font-medium leading-normal">
                {study.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 