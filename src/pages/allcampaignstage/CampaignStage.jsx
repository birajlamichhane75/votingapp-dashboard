import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { campaignStageData, votingCampaignData } from "../../constants/constants";
import { CampaignStageTable } from "../../components/campaignstage/CampaignStageTable";

export const AllCampaignStage = () => {


    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Campaign Stages" showBars />
                    </div>

                    
                        {
                            votingCampaignData &&
                            votingCampaignData.map((vcdata, index) => {
                                return (
                                    <>
                                        
                                        <CampaignStageTable key={index} campaignDets={campaignStageData} campaignid={vcdata.id} />
                                    </>
                                )
                            })
                        }
                    

                </div>


            </div>
        </>
    );
};
