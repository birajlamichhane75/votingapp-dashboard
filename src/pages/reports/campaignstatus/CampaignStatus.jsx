import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

export const CampaignStatus  = () => {
  
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Campaign Status" showBars />
          </div>

          
        </div>
      </div>
    </>
  );
};
