import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import DataTable from "../../../components/datatable/Table";
import { stageCandidateData } from "../../../constants/constants";
export const VotingStageCandidate = () => {


    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Voting Stage Candidate" showBars />
                    </div>
                    <DataTable tableData={stageCandidateData} route="candidates"/>
                </div>


            </div>
        </>
    );
};
