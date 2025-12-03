
import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import { UIInput } from "../../../ui/uiinput/UIInput";
import UIButton from "../../../ui/uibutton/UIButton";
import PrevBtn from "../../../ui/prevbutton/BackBtn";

// "id": "48583f4a5094bbf3",
// "organizationID": "dccf2183a9ff686a",
// "title": "tow",
// "description": "ahdfsdasd",
// "logo": "3205126abc8e3267",
// "banner": "a87f394ab91bae99",
// "startDateTime": "2024-03-30T07:45:21.894Z",
// "endDateTime": "2024-03-31T07:49:21.894Z",
// "timeZone": "ABC",
// "updated": "2024-03-29T09:40:39.378Z",
// "inserted": "2024-03-29T09:40:39.378Z"

export const VotingCampaignAddEntry = () => {
  const [state, setstate] = useState({
    organizationID: "",
    title: "",
    desc: "",
    logo: "",
    banner: "",
    candidate: "",
    campaignStages: "",
    startDate: "",
    endDate: "",
    timeZone: "",
  });

  const handelchange = (e) => {
    const value = e.target.value;
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }));

  }

  const submithandler = (e) => {
    e.preventDefault();
    console.log(state.name);
  }
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="Add Entry - Voting Campaign" showBars />
          </div>

          <PrevBtn />
<div className="form-wrapper">
            <form className="form">

              <div className="input">
                <UIInput value={state.organizationID} onChange={handelchange} name="organizationID" label="OrganizationID" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.title} onChange={handelchange} name="title" label="Title" type="text" />
              </div>


              <div className="input">
                <UIInput value={state.logo} onChange={handelchange} name="logo" label="Logo" type="file" />
              </div>
              <div className="input">
                <UIInput value={state.banner} onChange={handelchange} name="banner" label="Banner" type="file" />
              </div>
              <div className="input">
                <UIInput value={state.startDate} onChange={handelchange} name="startDate" label="StartDate" type="date" />
              </div>
              <div className="input">
                <UIInput value={state.endDate} onChange={handelchange} name="endDate" label="EndDate" type="date" />
              </div>

              <div className="input textarea">
                <label className="label">Description</label>
                <textarea value={state.desc} name="desc" onChange={handelchange}></textarea>
              </div>

              <div className="btn-wrapper">
                <UIButton label="Save" className="form-btn" onClick={submithandler} />
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};


