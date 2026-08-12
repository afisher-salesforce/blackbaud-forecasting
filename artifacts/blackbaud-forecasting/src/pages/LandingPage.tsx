import React from 'react';
import { Link } from 'wouter';

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-[#f4f6f9] flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-[#d6dde8] px-6 py-3 flex items-center gap-3">
        <img src="/logo.svg" alt="Blackbaud Forecasting" className="h-8" />
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center">
          <h1 className="text-[32px] font-bold text-[#1f2937] mb-2">
            Blackbaud Forecasting
          </h1>
          <p className="text-[#5b6473] text-[17px] mb-10">
            Executive Discussion Site · Salesforce Account Team
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#d6dde8]">
            <p className="text-[#1f2937] text-[16px] mb-6 leading-relaxed">
              Access the forecasting capabilities review, strategic
              recommendations, and executive discussion materials prepared by
              your Salesforce account team.
            </p>

            <Link href="/sign-in">
              <button className="w-full bg-[#0f5cab] hover:bg-[#0a3f77] text-white font-semibold text-[16px] py-3 px-6 rounded-lg transition-colors cursor-pointer">
                Sign In
              </button>
            </Link>
          </div>

          <p className="mt-8 text-[13px] text-[#5b6473]">
            Access is managed by the Salesforce Account Team.
          </p>
        </div>
      </div>
    </div>
  );
}
