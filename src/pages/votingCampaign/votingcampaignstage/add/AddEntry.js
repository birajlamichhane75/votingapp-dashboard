

import React, { useState } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { UIInput } from "../../../../ui/uiinput/UIInput";
import UIButton from "../../../../ui/uibutton/UIButton";
import PrevBtn from '../../../../ui/prevbutton/BackBtn'

// "id": "2",
// "organizationID": "ORG456",
// "title": "Employee of the Month",
// "description": "Vote for the employee of the month.",
// "startDateTime": "2024-04-01T09:00:00",
// "endDateTime": "2024-04-30T17:00:00",
// "smsVotingLimit": 2,
// "emailVotingLimit": 1,
// "votingCampaignId": "VC002",
// "inserted": "2024-04-02T10:00:00",
// "updated": "2024-04-03T15:00:00"

export const VCSAddEntry = () => {
  const [state, setstate] = useState({
    title: "",
    votingcampaignid: "",
    startDateTime: "",
    endDateTime: "",
    smsvotinglimit: "",
    emailvotinglimit: "",
    desc: ""
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
                <UIInput value={state.title} onChange={handelchange} name="title" label="Title" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.votingcampaignid} onChange={handelchange} name="votingcampaignid" label="Voting Campaign ID" type="text" />
              </div>

              <div className="input">
                <UIInput value={state.startDateTime} onChange={handelchange} name="startDateTime" label="StartDateTime" type="date" />
              </div>
              <div className="input">
                <UIInput value={state.endDateTime} onChange={handelchange} name="endDateTime" label="EndDateTime" type="date" />
              </div>
              <div className="input">
                <UIInput value={state.smsvotinglimit} onChange={handelchange} name="smsvotinglimit" label="SMS Voiting Limit" type="number" />
              </div>
              <div className="input">
                <UIInput value={state.emailvotinglimit} onChange={handelchange} name="emailvotinglimit" label="Email Voiting Limit" type="number" />
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
