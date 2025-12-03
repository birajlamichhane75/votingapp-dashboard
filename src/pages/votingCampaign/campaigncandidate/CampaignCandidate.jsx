/* eslint-disable no-unused-vars */
import React from "react";
import { CandidateTable } from "../../../components/candidate/CandidateTable";
import { candidateData } from "../../../constants/constants";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { useParams } from 'react-router-dom';
import { StageCandidateTable } from "../../../components/stagecandidate/StageCandidateTable";

export const CampaignCandidate = () => {
  let { id, csid } = useParams();

  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Candidate" showBars />
          </div>
          {
            csid ? <StageCandidateTable candidateDets={candidateData} campaignid={id} campaignstageid={csid} /> : <CandidateTable candidateDets={candidateData} campaignid={id} />
          }

        </div>
      </div>
    </>
  );
};
