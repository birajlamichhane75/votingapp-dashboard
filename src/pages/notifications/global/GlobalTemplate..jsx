import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";


export const GlobalTemplate = () => {
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Global Template" showBars />
          </div>
        </div>
      </div>
    </>
  );
};
