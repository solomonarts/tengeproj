import React from "react";
import tokenpic from "../assets/bg/tokenomics.png";

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="content">
        <h1 className="text-[38px] md:text-[54px] mt-8 lg:text-[80px] font-bold text-center mb-8 text-white">
          Tokenomics and Allocation
        </h1>
        <p className="mb-10 text-lg text-center">
          There are 1,000,000,000 $Tenge available No Taxes, No Bullshit. It’s
          that simple. LP tokens are burnt, and contract ownership is renounced.
        </p>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <img src={tokenpic} alt="token info" />
        </div>
        {/* <table className="tokenomics-table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Allocation (%)</th>
              <th>Unlock at TGE (%)</th>
              <th>Lockup Duration</th>
              <th>Unlock Duration</th>
              <th>Unlock Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liquidity</td>
              <td>10</td>
              <td>100</td>
              <td>0 Months</td>
              <td>0 Months</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Public</td>
              <td>10</td>
              <td>100</td>
              <td>0 Months</td>
              <td>0 Months</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Blockchain Education</td>
              <td>25</td>
              <td>10</td>
              <td>0 Months</td>
              <td>36 Months</td>
              <td>Quarterly</td>
            </tr>
            <tr>
              <td>Creators/Marketing</td>
              <td>20</td>
              <td>0</td>
              <td>2 Months</td>
              <td>36 Months</td>
              <td>Monthly</td>
            </tr>
            <tr>
              <td>Team</td>
              <td>25</td>
              <td>0</td>
              <td>3 Months</td>
              <td>36 Months</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>Treasury</td>
              <td>10</td>
              <td>0</td>
              <td>12 Months</td>
              <td>36 Months</td>
              <td>Monthly</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </section>
  );
};

export default TokenomicsSection;
