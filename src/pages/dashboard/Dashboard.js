import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Counter from "../../components/counter/Counter";
import Charts from "../../components/Charts/Chart";

export const Dashboard = () => {
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">

          <div className="dashboard">
            <Navbar name="Dashboard" showBars />
            <Counter />
            <Charts />
          </div>
        </div>

      </div>


    </>
  );
};
