import React from 'react';
import { Link } from 'wouter';

export default function ForwardLookingStatement() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2>Forward Looking Statement</h2>
      <div className="subtitle">
        We will close with the required legal language exactly as provided for presentation-safe use.
      </div>

      <div className="legal mt-8">
        <p>This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectation or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce's reports filed from time to time with the Securities and Exchange Commission, including, but not limited to our ability to meet the expectations of our customers; uncertainties regarding Al technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; the pace of change and innovation and our ability to compete in the markets in which we participate; and our ability to maintain and enhance our brands.</p>
      </div>

      <div className="progression">
        <Link href="/external-research">&larr; Previous: External Research</Link>
        <Link href="/">Back to Executive Summary</Link>
      </div>
    </div>
  );
}
