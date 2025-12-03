import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { votingCampaignData } from "../../constants/constants";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import DaysLeftCalculator from "../../ui/daysleft/Daysleft";

export const VotingCampaign = () => {
    return (
        <>
            <div className="framecontainer">
                <Sidebar />

                <div className="framecontainer-content">
                    <div className="dashboard">
                        <Navbar name="Voting Campaign" showBars />
                    </div>

                    <div className="table-wrapper-top">
                        <Link to="/dashboard"><BsFillArrowLeftSquareFill className="icon" /></Link>
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
                                    {/* <th>organizationID</th> */}
                                    <th>title</th>
                                    <th>description</th>
                                    <th>logo</th>
                                    <th>banner</th>
                                    <th>Candidates</th>
                                    <th>CampaignStages</th>
                                    <th>startDateTime</th>
                                    <th>endDateTime</th>
                                    <th>timeZone</th>
                                    <th>updated</th>
                                    <th>inserted</th>
                                    <th>Action</th>
                                    {/*
                                    <th>SN</th>
                                    {votingCampaignData && 
                                        Object.keys(votingCampaignData[0]).map((col, index) => {
                                            return (<th key={index}>{col}</th>)
                                        })
                                    } 
                                    <th>Action</th>
                                    */}
                                </tr>
                            </thead>

                            <tbody className="table-body">
                                {votingCampaignData && votingCampaignData.length !== 0 ?
                                    votingCampaignData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{data.id}</td>
                                            {/* <td>{data.organizationID}</td> */}
                                            <td>{data.title}</td>
                                            <td>{data.description}</td>
                                            <td className="image"><img src={data.logo} alt="pic" /></td>
                                            <td className="image"><img src={data.banner} alt="pic" /></td>

                                            <td className="managecandidate">
                                                <Link to={`/votingcampaign/campaigncandidate/${data.id}`}><button className="view-all">View all</button></Link>
                                            </td>
                                            <td className="managecandidate">
                                                <Link to={`/votingcampaign/votingcampaignstage/${data.id}`}><button className="view-all">View all</button></Link>
                                            </td>
                                            <td>
                                                <DaysLeftCalculator date={data.startDateTime} title="Starts on" finishTitle="Started" classname="start" />
                                            </td>
                                            <td>
                                                <DaysLeftCalculator date={data.endDateTime} title="Ends on" finishTitle="Ended" classname="end" />
                                            </td>

                                            <td>{data.timeZone}</td>
                                            <td>{data.inserted}</td>
                                            <td>{data.updated}</td>

                                            <td className="action">
                                                <Link to={`edit/${data.id}`}><button className="bttn edit-btn">Edit</button></Link>
                                                <button className="bttn delete-btn">Delete</button>
                                            </td>
                                        </tr>
                                    )) :
                                    <tr>
                                        <td colSpan={14} className="notfound">Data not found.</td>
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

