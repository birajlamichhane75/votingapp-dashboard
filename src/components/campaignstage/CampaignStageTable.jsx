import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { votingCampaignData } from "../../constants/constants";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import DaysLeftCalculator from "../../ui/daysleft/Daysleft";

export const CampaignStageTable = ({ campaignDets, campaignid }) => {
    const navigate = useNavigate();

    return (
        <>
            {
                votingCampaignData.filter((data) => {
                    return data.id === campaignid
                }).map((item, index) => {
                    return (
                        <h1 key={index} className="vcdata-title"> <span>{item.title}-{campaignid} </span> </h1>
                    )
                })
            }
            <div className="table-wrapper-top">
                <Link to={'..'} onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}><BsFillArrowLeftSquareFill className="icon" /></Link>
                <Link to={`addentry`}>
                    <button className="add-btn" style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span><FaPlus /></span>Add Entry</button>
                </Link>
            </div>

            <div className="table-wrapper">
                <table className="table-wrapper-table" border={0}>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>id</th>
                            <th>organizationID</th>
                            <th>CampaignId</th>
                            <th>title</th>
                            <th>description</th>
                            <th>manageCandidates</th>
                            <th>startDateTime</th>
                            <th>endDateTime</th>
                            <th>smsVotingLimit</th>
                            <th>emailVotingLimit</th>
                            <th>inserted</th>
                            <th>updated</th>
                            <th>Action</th>
                            {/* <th>SN</th>
                            {
                                Object.keys(campaignDets[0]).map((col, index) => {
                                    return (<th key={index}>{col}</th>)
                                })
                            }
                            <th>Action</th> */}
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {campaignDets && campaignDets.length !== 0 ?
                            campaignDets.filter((data) => {
                                return data.votingCampaignId === campaignid
                            }).map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.organizationID}</td>
                                        <td>{data.votingCampaignId}</td>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td className="managecandidate">

                                            <Link to={`/votingcampaign/campaigncandidate/${data.votingCampaignId}/${data.id}`}><button className="view-all">View all</button></Link>
                                        </td>
                                        <td>
                                            <DaysLeftCalculator date={data.startDateTime} title="Starts on" finishTitle="Started" classname="start" />
                                        </td>
                                        <td>
                                            <DaysLeftCalculator date={data.endDateTime} title="Ends on" finishTitle="Ended" classname="end" />
                                        </td>
                                        <td>{data.smsVotingLimit}</td>
                                        <td>{data.emailVotingLimit}</td>
                                        <td>{data.inserted}</td>
                                        <td>{data.updated}</td>

                                        <td className="action">
                                            <Link to={`edit/${data.id}`}><button className="bttn edit-btn">Edit</button></Link>
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
        </>
    );
};

