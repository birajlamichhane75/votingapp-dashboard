import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DataTable from "../../../components/datatable/Table";

export const Countries = () => {
  let tableData =  [
    {
      "name": 'Nepal',
      "code": "NEP",
      "dialcode": "+977",
      "cities": "Bhaktapur",
      "status": "enabled",

    },
    {
      "name": 'USA',
      "code": "US",
      "dialcode": "+1",
      "cities": "New York",
      "status": "enabled",

    },
    
   
  ]
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Countries" showBars />
          </div>

          
          <DataTable tableData={tableData} route="countries"/>
          
        </div>
      </div>
    </>
  );
};
