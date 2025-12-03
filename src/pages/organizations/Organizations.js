import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export const Organizations = () => {
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Organization" showBars />
          </div>
        </div>
      </div>
    </>
  );
};
