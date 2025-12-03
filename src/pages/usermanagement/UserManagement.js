/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/datatable/Table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const UserManagement = () => {


  const [tableData, setTableData] = useState(
    [
      {
        "id": "b1817772f081503b",
        "name": "Sabins",
        "email": "prabincholexas@gmail.com",
        "profile": "/noavatar.jpg",
        "isVerified": false,
        "lastLoginIp": "::ffff:172.18.0.1",
        "lastLogin": "2024-9-6T5:21",
        "lastPasswordChange": "2024-9-6T5:21",
        "lastNotificationActivity": "2024-9-6T5:21"
      },
      {
        "id": "b1817772f081503b",
        "name": "Sabins",
        "email": "prabincholexas@gmail.com",
        "profile": "/noavatar.jpg",
        "isVerified": false,
        "lastLoginIp": "::ffff:172.18.0.1",
        "lastLogin": "2024-9-6T5:21",
        "lastPasswordChange": "2024-9-6T5:21",
        "lastNotificationActivity": "2024-9-6T5:21"
      },


    ]
  );
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="User" showBars />
          </div>


          <Link to="#" className="table-wrapper-top">
            <button className="add-btn" style={{ display: "flex", alignItems: "center", gap: "1rem"}}><span><FaPlus /></span>Add Entry</button>
          </Link>
          <div className="table-wrapper">
            <table className="table-wrapper-table" border={0}>
              <thead>
                <tr>
                  {
                    Object.keys(tableData[0]).map((col, index) => {
                      return (<th key={index}>{col}</th>)
                    })
                  }
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className="table-body">
                {tableData ?
                  tableData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td className="image"><img src={data.profile} alt="pic" /></td>
                        <td>{data.isVerified ? "Verified" : "Not Verified"}</td>
                        <td>{data.lastLoginIp}</td>
                        <td>{data.lastLogin}</td>
                        <td>{data.lastPasswordChange}</td>
                        <td>{data.lastNotificationActivity}</td>

                        <td className="action">
                          <button className="bttn delete-btn">Delete</button>
                        </td>
                      </tr>

                    )
                  }) :
                  <tr>
                    <td colSpan={7} className="notfound">Data not found.</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
