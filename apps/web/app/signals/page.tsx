"use client";

import { useState } from "react";

const featuredArticle = {
  id: 1,
  title: "The Future of AI in Business: Trends and Predictions",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1VtQMOu5yLD1uUu2KIgK2HwPfJu9qaxxCnP5HrdmJZCHu3mCe1y_ccsWY2yzbe6v4_8LpOLVl6LxNfXVS3tGCRw8Sy40LPyHN4W3O-eSfa8HDWV3Dx5XvnbZ1xrdIc1Gt_LsI5HsksJSGu7bo39d-vtmZnoFdinO7BJEWrIr94cy9nvdESFLa9oDCBzOA1O3N4wPpm02Ps96Wy1TGlLpMIN3KLeIGykSB-3EQV50SE_qAohbzlQXCeyF8ZGq-7mnbBybxM2pRTFmB"
};

const latestArticles = [
  {
    id: 2,
    title: "AI-Powered Marketing: Personalization at Scale",
    teaser: "Explore how AI is revolutionizing marketing by enabling businesses to deliver personalized experiences at scale.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChFNfgKb9tEViwEh-k4IqXroJJSEfMIUYylE9ppjjWUuJHtDQw7td-beXrjPkm6nEnXqU2Ko4KvFeUpAhUk-NOFHO_NdvicN2WQjGtBh2wWP4MvDXoJQYrbKE74kE7s5MiLsqh2KQ1v2BK3TBdY0ZNKLPwDOLcNmR_lq-r2ogzSmd4wrnPL7pLIOnu2lkjOvFjIT8yTDRJ_oCs2L36krmUlX_6DoeN9mDie1WtjRZx6aE7DHAF05S97fxiPW92SJlhLAqOBN_KmaAq"
  },
  {
    id: 3,
    title: "The Ethical Implications of AI in Healthcare",
    teaser: "Delve into the ethical considerations surrounding the use of AI in healthcare and the importance of responsible implementation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2pSHZRfJjoBSQtEw3gADB-zu5y9prVG1jO66UKl-j4gzzPJ-I33XrnBSMMybvoWJEdixW3EZd_q8tOiwEfFBunGgcBNVUucHZeIv41J8SYym3XeNplh2MBOhiDqmFOiArFJhybYQPRziiXmKHewfPycONhP4h3qjKd1hANRJJdQfHpQsvnGecn2OD-pD2MYX34cvLmtFwgJ8Do-V1vqr22sg1VfsseLM7C1Ft-fDvxar6UN0t4AWob4PKsB3VzWTVYg-Cqx58AK5G"
  },
  {
    id: 4,
    title: "AI and Cybersecurity: A Proactive Approach",
    teaser: "Discover how AI is enhancing cybersecurity measures and providing a proactive defense against evolving threats.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9XwU55H1tT_Xtv6JiH7wiaWKcc4yrAr7hnzD514FsszGcA8UAFc5b-cfUvkg86mRo6e0o3bnMKBLc8U4irYaXOt7uzWa1LhXvWBMqPagwFlFeBz5_3Sdfb2r9unGHKQeLjvCKuejsGlk8lHdi5h9TzmUTJCNrObNHUgjUGJjMfv0rLF2AJx-1gcOp4nQK5zKDrhAsmHBQa0H_GuzwLGlzhsPmR-feur7KwXhwLMwJpsIN8xUV6XbjrOQK45GdCYCbx8TA2ZVxkGIk"
  },
  {
    id: 5,
    title: "AI in Finance: Transforming Investment Strategies",
    teaser: "Learn about the transformative impact of AI on the finance industry, particularly in the realm of investment strategies.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPJIvCJFr5cvRvUC4RuvEGbdbKF-nCdoRblyproK9OZ7hjp3AYN8UuRCms915bTCFqxPDaeM21RF3pKfHxtgKfJHwsYD1kS-9SKB-9Jz6Us2jphTBCfgdhmTX6N6qs2ZCfQPTd1ceBBAinJXOZh0fAmQQH1rkL7DeI0Y_6QflHoz4tvZ2lQt-Be8a5IGoWEcbpYbGYLrkPIL9oISmZUIS7FFOIXBL8LE2-lSjf0WrmvElXfHdnlSu2Na5iiW1Nw7GWtgfwR6l1qNMB"
  },
  {
    id: 6,
    title: "The Role of AI in Education: Personalized Learning",
    teaser: "Examine the role of AI in shaping the future of education through personalized learning experiences.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZdynR3fkS0MAXodrx7Qg4PQRz9xsju55kJ540svG44Uxytcu9ght756TWAptx6uubouDwsFlBs6gDX4fFZnW0ymg9TDXa4rc7H4vhxDFpfrIp9eFKUbQRIL4chZchd9td9bBtzuQ_CRy7FOQjimI-cDgLO_Ui_dmKtg7QzkB1lmJZDr8HQtxkM1jMKo5jfn0BNd_VJ5D4sUcRDBqLUYtyU37ducqYiYRtAtwSohpA5ffv4ldW5xjqxvq1kQKv2EXDga6DFa7aM-VE"
  }
];

const mostReadArticles = [
  {
    id: 2,
    title: "AI-Powered Marketing: Personalization at Scale",
    teaser: "Explore how AI is revolutionizing marketing by enabling businesses to deliver personalized experiences at scale.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNUyEAzYn3W2lGYAd9XNJOG2PccwbBMrGj_85Aqp7vgyXO6ZcxP-9xJwWAJoNIYAGJbCFxg_YxuUv2TFCKQ9P2wb4OS0xyBJe5Sq1o-z1jGb_hrSY0N8724URnNKWG323hPTjp38u8oS3QsyTf1yXjscDCLiACzOC88L_bFZ3RTli949GhYCn-caxHM9rMlvJ80dXucos_bQPLJ_uCyDZgnJf_WXo_KV0pT9KrRilflkQFjDnriQV1Mb6Du1HCWi7dp00hvnRhS9C"
  },
  {
    id: 3,
    title: "The Ethical Implications of AI in Healthcare",
    teaser: "Delve into the ethical considerations surrounding the use of AI in healthcare and the importance of responsible implementation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuQ0lwAiq41h3Y7fOFku5h9NDQsSN29aozMFOKhCpOU-R1oGUpNZbHWTVoJ07an6DFDLOiu8F-SeadgCYhQtm0QrErov7nApdX7INPVNQJMQMfZJe7eKXp-MuNxXQEOlz8DldgmVFhIk7b3amonRfFUbGE77-VCmjZJEL7-XArXblGBuHwvlxGkbH36uSvMSSBeTE_JFqkvkIHVSR9wP_bI4KAoJ2O8UJIht_GIFd-LYocJ5ed2EJpokaJh_amMqlzXaEu2YC0qSty"
  },
  {
    id: 4,
    title: "AI and Cybersecurity: A Proactive Approach",
    teaser: "Discover how AI is enhancing cybersecurity measures and providing a proactive defense against evolving threats.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt2_CB7QxHMEvSuDJXiVODIWbRHtIh8UUSCT_6Ij_JRJj3WjJB0lHO0cW9r98hfyKRgxqJZPS9lZBXGNL11bR2XIFTOzFfG1ncFYTu6uuGT90qWnoOw0JS08ZgkLmophGqh_zhnRzwJTaW5B7yGasuanrxWNfMCRUUi-vtLWWXQpEbPgFN43A6fWUT_M9i1dOkZbxt1UYgIrzQxncRLhUmw5UMEzULUPnah8LtADS0F0gcM3S1cVLloF0zyaAjdD9foNyUlfgdKTZu"
  }
];

const categories = [
  "AI in Business",
  "AI Ethics", 
  "AI Security",
  "AI Finance",
  "AI Education"
];

export default function SignalsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="gap-1 px-6 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[920px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
            Signals
          </p>
        </div>
        
        {/* Featured Article */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div
            className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-video"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("${featuredArticle.image}")`
            }}
          >
            <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
              {featuredArticle.title}
            </p>
          </div>
        </div>

        {/* Latest Articles */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Latest
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {latestArticles.map((article) => (
            <div key={article.id} className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${article.image}")` }}
              ></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">
                  {article.title}
                </p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {article.teaser}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center p-4">
          <a href="#" className="flex size-10 items-center justify-center">
            <div className="text-[#111418]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </div>
          </a>
          <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f5]" href="#">
            1
          </a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
            2
          </a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
            3
          </a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
            4
          </a>
          <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">
            5
          </a>
          <a href="#" className="flex size-10 items-center justify-center">
            <div className="text-[#111418]" data-icon="CaretRight" data-size="18px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div className="layout-content-container flex flex-col w-[360px]">
        {/* Categories */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Categories
        </h3>
        <div className="px-4">
          {categories.map((category) => (
            <label key={category} className="flex gap-x-3 py-3 flex-row">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-[#dbe0e6] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe0e6] focus:outline-none"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <p className="text-[#111418] text-base font-normal leading-normal">
                {category}
              </p>
            </label>
          ))}
        </div>

        {/* Most Read */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Most Read
        </h3>
        {mostReadArticles.map((article) => (
          <div key={article.id} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              style={{ backgroundImage: `url("${article.image}")` }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                {article.title}
              </p>
              <p className="text-[#60758a] text-sm font-normal leading-normal line-clamp-2">
                {article.teaser}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 