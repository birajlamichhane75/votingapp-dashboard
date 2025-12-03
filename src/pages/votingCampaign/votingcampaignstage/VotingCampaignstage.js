import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { campaignStageData } from "../../../constants/constants";
import { CampaignStageTable } from "../../../components/campaignstage/CampaignStageTable";
import { useParams } from 'react-router-dom';
 
export const VotingCampaignStage = () => {
    let {id} = useParams();
    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Voting Campaign Stage" showBars />
                    </div>
                   
                   <CampaignStageTable campaignDets={campaignStageData} campaignid={id}/>

                </div>
            </div>
        </>
    );
};

