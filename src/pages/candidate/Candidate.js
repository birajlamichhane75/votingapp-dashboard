import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { candidateData, votingCampaignData } from "../../constants/constants";
import { CandidateTable } from "../../components/candidate/CandidateTable";

export const Candidate = () => {


    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Candidates" showBars />
                    </div>

                   
                        {
                            votingCampaignData &&
                            votingCampaignData.map((vcdata, index) => {
                                return (
                                    <>
                                        <CandidateTable candidateDets={candidateData} campaignid={vcdata.id} />
                                    </>
                                )
                            })
                        }
                   


                </div>


            </div>
        </>
    );
};
