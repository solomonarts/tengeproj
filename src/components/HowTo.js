import React from "react";

const SvgConnector = () => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-20 text-white animate-pulse"
  >
    <path
      d="M50 0 C 80 40, 20 60, 50 100"
      stroke="url(#glow)"
      strokeWidth="2"
      fill="none"
    />
    <defs>
      <linearGradient id="glow" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#00f7ff" />
        <stop offset="100%" stopColor="#ff4fd8" />
      </linearGradient>
    </defs>
  </svg>
);

const HowTo = () => {
  return (
    <div id="how-to" className="bg-[#011214] py-12 px-4">
      <h1 className="text-[38px] md:text-[54px] lg:text-[80px] font-bold text-center mb-8 text-white">
        🪙 How to Buy on BNB.
      </h1>

      <div className="flex flex-col items-center space-y-10">
        {/* Step 1 */}
        <div className="step-card rotate-6">
          <h3 className="mb-2 text-lg font-semibold">
            Step 1: Set Up a Wallet
          </h3>
          <p>
            Download and create a wallet like Trust wallet or Metamask. Fund it
            with BNB for gas fees.
          </p>
          <div className="flex mt-3 space-x-2">
            <a
              href="https://trustwallet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple"
            >
              Trust Wallet
            </a>
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
            >
              Metamask
            </a>
          </div>
        </div>
        <SvgConnector />

        {/* Step 2 and 3 */}
        <div className="flex flex-wrap justify-center space-x-10">
          <div className="step-card -rotate-6">
            <h3 className="mb-2 text-lg font-semibold">
              Step 2: Visit Pancakeswap
            </h3>
            <p>
              Go to{" "}
              <a
                href="https://pancakeswap.finance"
                className="text-blue-300 underline"
              >
                pancakeswap.io
              </a>{" "}
              and click "Launch App" to access the swap.
            </p>
          </div>
          <div className="step-card rotate-6">
            <h3 className="mb-2 text-lg font-semibold">
              Step 3: Connect Wallet
            </h3>
            <p>
              Click “Connect” and choose your wallet to connect to Pancakeswap.
            </p>
          </div>
        </div>
        <SvgConnector />

        {/* Step 4 and 5 */}
        <div className="flex flex-wrap-reverse justify-center space-x-10">
          <div className="step-card -rotate-6">
            <h3 className="mb-2 text-lg font-semibold">
              Step 4: Paste Token Address
            </h3>
            <p>
              Copy the token's BNB address and paste it in the swap input field.
            </p>
          </div>
          <div className="step-card rotate-6">
            <h3 className="mb-2 text-lg font-semibold">Step 5: Swap</h3>
            <p>
              Select the token and amount to swap. Confirm the transaction in
              your wallet.
            </p>
          </div>
        </div>
        <SvgConnector />

        {/* Step 6 */}
        <div className="step-card -rotate-6">
          <h3 className="mb-2 text-lg font-semibold">Step 6: Done!</h3>
          <p>
            You’re now a holder! Add the token to your wallet manually if it
            doesn’t show.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
