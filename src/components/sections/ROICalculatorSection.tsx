"use client";

import { useState, useCallback } from "react";
import { Reveal } from "@/components/common/Reveal";

interface ROICalculatorSectionProps {
  defaults: {
    opportunities: number;
    closeRate: number;
    ltv: number;
    investment: number;
  };
}

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function ROICalculatorSection({ defaults }: ROICalculatorSectionProps) {
  const [opportunities, setOpportunities] = useState(defaults.opportunities);
  const [ltv, setLtv] = useState(defaults.ltv);
  const [closeRate, setCloseRate] = useState(defaults.closeRate);
  const investment = defaults.investment;

  const calculate = useCallback(() => {
    const estClients = opportunities * (closeRate / 100);
    const valueGeneratedMonth = estClients * ltv;
    const valueGeneratedYear = valueGeneratedMonth * 12;
    const netValue = valueGeneratedMonth - investment;
    const roi = investment > 0 ? (netValue / investment) * 100 : 0;
    const breakEven = ltv > 0 ? (investment / ltv).toFixed(1) : "0";

    return {
      estClients,
      valueGeneratedMonth,
      valueGeneratedYear,
      netValue,
      roi,
      breakEven,
    };
  }, [opportunities, ltv, closeRate, investment]);

  const results = calculate();

  return (
    <section className="mb-20 w-full max-w-7xl mx-auto px-6 md:mb-32">
      <Reveal className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="border-l-2 border-signal pl-6">
          <h2 className="mb-2 font-display text-4xl font-bold uppercase">
            Your Projected ROI
          </h2>
          <p className="font-mono text-sm uppercase text-neutral-500">
            Calculate the LTV impact of your sales-ready opportunities.
          </p>
        </div>
        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 animate-pulse bg-signal" />
          Live Calculator
        </div>
      </Reveal>

      <Reveal className="border border-black bg-white">
        <div className="grid lg:grid-cols-12">
          {/* LEFT COLUMN: INPUTS */}
          <div className="relative flex h-full flex-col justify-between border-b border-black bg-white p-8 md:p-12 lg:col-span-5 lg:border-b-0 lg:border-r">
            <div className="absolute left-0 top-0 bg-black px-3 py-1 font-mono text-[10px] uppercase text-white">
              Input Data
            </div>

            <div className="mt-8 space-y-10">
              {/* SLIDER INPUT */}
              <div className="group">
                <div className="mb-4 flex items-end justify-between">
                  <label className="font-display text-sm font-bold uppercase tracking-tight">
                    Sales-Ready Opportunities
                  </label>
                  <span className="font-mono text-2xl font-bold text-signal">
                    {opportunities}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="1"
                  value={opportunities}
                  onChange={(e) => setOpportunities(Number(e.target.value))}
                  className="roi-slider w-full"
                />
              </div>

              {/* NUMBER INPUT: LTV */}
              <div className="group relative">
                <label className="mb-2 block font-mono text-[10px] uppercase text-neutral-500">
                  Lifetime Client Value (LTV)
                </label>
                <div className="flex items-center border border-black bg-neutral-50 transition-colors group-hover:border-signal">
                  <span className="pl-4 font-mono text-neutral-400">$</span>
                  <input
                    type="number"
                    value={ltv}
                    onChange={(e) => setLtv(Number(e.target.value) || 0)}
                    className="w-full bg-transparent p-3 font-mono text-lg font-bold focus:outline-none"
                  />
                </div>
              </div>

              {/* NUMBER INPUT: CLOSE RATE */}
              <div className="group relative">
                <label className="mb-2 block font-mono text-[10px] uppercase text-neutral-500">
                  Close Rate (%)
                </label>
                <div className="flex items-center border border-black bg-neutral-50 transition-colors group-hover:border-signal">
                  <input
                    type="number"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value) || 0)}
                    className="w-full bg-transparent p-3 font-mono text-lg font-bold focus:outline-none"
                  />
                  <span className="pr-4 font-mono text-neutral-400">%</span>
                </div>
              </div>

              {/* READ ONLY: INVESTMENT */}
              <div className="relative opacity-75">
                <div className="mb-2 flex justify-between">
                  <label className="block font-mono text-[10px] uppercase text-neutral-500">
                    Monthly Investment
                  </label>
                  <span className="bg-black/5 px-2 font-mono text-[10px] uppercase text-signal">
                    As Proposed
                  </span>
                </div>
                <div className="flex cursor-not-allowed items-center border border-neutral-300 bg-neutral-100">
                  <span className="pl-4 font-mono text-neutral-400">$</span>
                  <input
                    type="number"
                    value={investment}
                    readOnly
                    className="w-full cursor-not-allowed bg-transparent p-3 font-mono text-lg font-bold text-neutral-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="font-mono text-[10px] uppercase leading-relaxed text-neutral-400">
                Projections based on Total Contract Value (LTV). ROI is
                calculated on total value generated vs. monthly spend.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: OUTPUTS */}
          <div className="flex flex-col bg-neutral-50 lg:col-span-7">
            {/* Top Bar */}
            <div className="flex items-center justify-between bg-black p-4 text-white">
              <span className="font-mono text-[10px] uppercase">
                System Output
              </span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse bg-signal" />
                <span className="font-mono text-[10px] uppercase">
                  Live Calc
                </span>
              </div>
            </div>

            {/* Output Grid */}
            <div className="grid h-full grid-cols-1 gap-px border-b border-black bg-black md:grid-cols-2">
              {/* New Clients */}
              <div className="group flex flex-col justify-between bg-white p-8 transition-colors duration-0 hover:bg-signal">
                <span className="w-fit border border-black/20 px-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:border-white/50 group-hover:text-white">
                  Est. New Clients
                </span>
                <div>
                  <span className="block font-display text-5xl font-bold tracking-tighter group-hover:text-white">
                    {results.estClients.toFixed(1)}
                  </span>
                  <span className="font-mono text-xs uppercase text-neutral-400 group-hover:text-white/80">
                    Per Month
                  </span>
                </div>
              </div>

              {/* Monthly Value Generated */}
              <div className="group flex flex-col justify-between bg-white p-8 transition-colors duration-0 hover:bg-black">
                <span className="w-fit border border-black/20 px-2 font-mono text-[10px] uppercase text-neutral-500 group-hover:border-signal group-hover:text-signal">
                  Value Generated
                </span>
                <div>
                  <span className="block font-display text-4xl font-bold tracking-tighter group-hover:text-white lg:text-5xl">
                    {formatCurrency(results.valueGeneratedMonth)}
                  </span>
                  <span className="font-mono text-xs uppercase text-neutral-400 group-hover:text-neutral-500">
                    Revenue Added / Month
                  </span>
                </div>
              </div>

              {/* Yearly Value Generated */}
              <div className="relative flex flex-col justify-between overflow-hidden border-t border-black bg-white p-8 md:col-span-2">
                <div className="relative z-10 flex flex-col items-end justify-between md:flex-row">
                  <div>
                    <span className="bg-black px-2 py-1 font-mono text-[10px] uppercase text-white">
                      Annual System Impact
                    </span>
                    <span className="mt-4 block font-display text-5xl font-bold tracking-tighter text-signal md:text-7xl">
                      {formatCurrency(results.valueGeneratedYear)}
                    </span>
                  </div>
                  <div className="mt-4 text-right md:mt-0">
                    <p className="font-display text-sm font-bold uppercase">
                      Total Pipeline Value
                    </p>
                    <p className="font-mono text-[10px] text-neutral-500">
                      Generated over 12 months
                    </p>
                  </div>
                </div>
              </div>

              {/* Profit & ROI */}
              <div className="grid grid-cols-2 gap-8 bg-white p-6 md:col-span-2 md:p-8">
                <div>
                  <span className="mb-2 block border-b border-black pb-1 font-mono text-[10px] uppercase text-neutral-500">
                    Net Value Created (Month)
                  </span>
                  <span
                    className="font-display text-2xl font-bold md:text-3xl"
                    style={{ color: results.netValue >= 0 ? "#000" : "#ff0000" }}
                  >
                    {formatCurrency(results.netValue)}
                  </span>
                </div>
                <div>
                  <span className="mb-2 block border-b border-black pb-1 font-mono text-[10px] uppercase text-neutral-500">
                    ROI Percentage
                  </span>
                  <span className="font-display text-2xl font-bold text-signal md:text-3xl">
                    {results.roi.toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Break Even Analysis */}
            <div className="border-t border-black bg-neutral-100 p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-signal">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeWidth={1.5}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 font-display text-sm font-bold uppercase">
                    Break-Even Analysis
                  </h4>
                  <p className="font-mono text-xs text-neutral-600">
                    You need{" "}
                    <span className="bg-black px-1 text-white">
                      {results.breakEven}
                    </span>{" "}
                    new client(s) to cover the monthly investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between border-t border-black bg-black px-4 py-2 font-mono text-[10px] uppercase text-white">
          <div>Calculator Status</div>
          <div className="text-signal">Active</div>
        </div>
      </Reveal>
    </section>
  );
}
