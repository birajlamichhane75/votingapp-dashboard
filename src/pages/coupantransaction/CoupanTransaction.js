import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataTable from "../../components/datatable/Table";
import { coupanData } from "../../constants/constants";

export const CoupanTransaction = () => {
    

    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Coupan Transaction" showBars />
                    </div>

                    <DataTable tableData={coupanData} route="coupantransaction" />
                </div>
            </div>
        </>
    );
};
