/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { campaignStageData  } from "../../constants/constants";
import CandidateModal from "../../ui/selectmodal/SelectModal";

export const StageCandidateTable = ({ candidateDets, campaignid, campaignstageid }) => {
    const navigate = useNavigate();




    return (
        <>
            {
                campaignStageData.filter((data) => {
                    return data.votingCampaignId === campaignid
                }).filter((vcsdata) => {
                    return vcsdata.id === campaignstageid
                }).map((item, index) => {
                    return <h1 key={index} className="vcdata-title"> <span>{item.title}-{campaignstageid} </span> </h1>
                })
            }

            <div className="table-wrapper-top">
                <Link to={'..'} onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }}><BsFillArrowLeftSquareFill className="icon" /></Link>
                <CandidateModal votingCampaignId = {campaignid} campaignstageid={campaignstageid}/>
                  
            </div>


            <div className="table-wrapper">
                <table className="table-wrapper-table" border={0}>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>id</th>
                            <th>CampaignId</th>
                            <th>StageId</th>
                            <th>code</th>
                            {/* <th>organizationID</th> */}
                            <th>name</th>
                            <th>age</th>
                            <th>gender</th>
                            <th>nationality</th>
                            <th>weight</th>
                            <th>city</th>
                            <th>biography</th>
                            <th>profilePicture</th>
                            <th>Facebook</th>
                            <th>Instagram</th>
                            <th>Twitter</th>
                            <th>inserted</th>
                            <th>updated</th>
                            <th>Action</th>
                            {/* {
                                candidateDets &&
                                Object.keys(candidateDets[0]).map((col, index) => {
                                    return (<th key={index}>{col}</th>)
                                })
                            }
                            <th>Action</th> */}
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {candidateDets && candidateDets.length !== 0 ?
                            candidateDets.filter((sdata) => {
                                return sdata.votingCampaignId === campaignid
                            }).filter((vcsdata) => {
                                return vcsdata.votingCampaignStageId === campaignstageid
                            }).map((data, index) => {
                                return (

                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.votingCampaignId}</td>
                                        <td>{data.votingCampaignStageId}</td>
                                        <td>{data.code}</td>
                                        {/* <td>{data.organizationID}</td> */}
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.gender}</td>
                                        <td>{data.nationality}</td>
                                        <td>{data.weight}</td>
                                        <td>{data.city}</td>
                                        <td className="desc">{data.biography}</td>
                                        <td className="image"><img src={data.profilePicture} alt="pic" /></td>
                                        <td><Link to={data.socialMediaFacebook} target="_blank">Facebook</Link></td>
                                        <td><Link to={data.socialMediaInstagram} target="_blank">Instagram</Link></td>
                                        <td><Link to={data.socialMediaTwitter} target="_blank">Twitter</Link></td>

                                        <td>{data.inserted}</td>
                                        <td>{data.updated}</td>

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

        </>
    );
};
