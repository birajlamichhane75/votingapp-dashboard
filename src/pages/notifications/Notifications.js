/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UIButton from "../../ui/uibutton/UIButton";
import DataTable from "../../components/datatable/Table";

export const Notifications = () => {
  const [tableCol, setTableCol] = useState(
    [
      "ID",
      "Organization ID",
      "Title",
      "Message",
      "User ID",
      "InsertedAt",
      "UpdatedAt",
    ]
  );


  const [tableData, setTableData] = useState(
    [
      {
        "id": '1',
        "organizationId": "0075",
        "title": "notification titile",
        "message": "message here",
        "userId": "1221",
        "insertedAt": "2080-9-9",
        "updatedAt": "2080-10-9"

      },
      {
        "id": '2',
        "organizationId": "0076",
        "title": "notification titile",
        "message": "message here",
        "userId": "1222",
        "insertedAt": "2080-9-9",
        "updatedAt": "2080-10-9"

      }
    ]
  );
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Notification" showBars />
          </div>
            
            <DataTable tableData={tableData} route="notification"/>
          
        </div>
      </div>
    </>
  );
};
