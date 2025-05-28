"use client";

import { Metadata } from "next";
import { useState } from "react";

const services = [
  {
    id: "strategy",
    name: "Strategy Sprint",
    title: "AI Strategy Sprint",
    description: "Kickstart your AI journey with a focused strategy sprint. We'll identify key opportunities and create a roadmap for AI integration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z" />
      </svg>
    ),
  },
  {
    id: "automation",
    name: "Workflow Automation",
    title: "AI Workflow Automation",
    description: "Automate repetitive tasks and streamline your business processes with AI-powered workflow solutions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
      </svg>
    ),
  },
  {
    id: "agents",
    name: "Custom Agents",
    title: "Custom AI Agents",
    description: "Develop bespoke AI agents tailored to your specific needs, enhancing efficiency and decision-making.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z" />
      </svg>
    ),
  },
  {
    id: "upskill",
    name: "Upskill Labs",
    title: "AI Upskilling Labs",
    description: "Empower your team with the skills to leverage AI effectively through our customized training programs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("strategy");

  return (
    <div className="flex flex-1 justify-center py-5 px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdCQSg1jrQ6n2EKSpo7ASntBGboxhqMz3YMli2glkd9ueoEHxMijorNwFIsZww--2adWIsF3H3ipWOfPKQc1_5_0bEcOuG3S9hDn6JYVF5Kd6jTAFlWkc4nc-eKfD00cO4rKnAUfwbW5AVvyKhe-5iliPa1VlHMx6uIgQhjH4Msst-K8REjPltkyTYDiZFuSU670LDd_M49aE4MInM95hGYR-T9AaDp3mw2vQEN-dxXZHhBVpLXK00ueUXLSKRqqkqpi2iL2de-UNb")`,
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  AI Services That Turn Workflows into Super-Flows
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  We're an integration agency for Generative AI. We help businesses leverage AI to automate workflows, build custom agents, and upskill their teams.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Get Started</span>
              </button>
            </div>
          </div>
        </div>

        {/* First Tab Section */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === service.id
                    ? "border-b-[#111418] text-[#111418]"
                    : "border-b-transparent text-[#60758a]"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]">{service.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  {service.title}
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Tab Section */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            {services.map((service, index) => (
              <button
                key={`${service.id}-2`}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  index === 1
                    ? "border-b-[#111418] text-[#111418]"
                    : "border-b-transparent text-[#60758a]"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid - Second Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {services.map((service) => (
            <div
              key={`${service.id}-2`}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]">{service.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  {service.title}
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Third Tab Section */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            {services.map((service, index) => (
              <button
                key={`${service.id}-3`}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  index === 2
                    ? "border-b-[#111418] text-[#111418]"
                    : "border-b-transparent text-[#60758a]"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid - Third Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {services.map((service) => (
            <div
              key={`${service.id}-3`}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]">{service.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  {service.title}
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fourth Tab Section */}
        <div className="pb-3">
          <div className="flex border-b border-[#dbe0e6] px-4 gap-8">
            {services.map((service, index) => (
              <button
                key={`${service.id}-4`}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  index === 3
                    ? "border-b-[#111418] text-[#111418]"
                    : "border-b-transparent text-[#60758a]"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Service Cards Grid - Fourth Section */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {services.map((service) => (
            <div
              key={`${service.id}-4`}
              className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col"
            >
              <div className="text-[#111418]">{service.icon}</div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#111418] text-base font-bold leading-tight">
                  {service.title}
                </h2>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 