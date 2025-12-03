
import React, { useState } from "react";
import { UIInput } from "../../../ui/uiinput/UIInput";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
import UIButton from "../../../ui/uibutton/UIButton";
import PrevBtn from "../../../ui/prevbutton/BackBtn";

// "id": "06f8ed08f89c7268",
// "organizationID": "dccf2183a9ff686a",
// "name": "Coupon Special1",
// "votes": 20,
// "eligibleCandidateCounts": 3,
// "pricing": "1000.00",
// "currency": "NPR",
// "avaibilityPeriodStart": "2024-03-26T18:21:29.000Z",
// "avaibilityPeriodEnd": "2024-03-26T18:21:29.000Z",
// "votingCampaignId": "1e8cd5477c14f00d",
// "inserted": "2024-03-29T10:58:42.295Z",
// "updated": "2024-03-29T10:58:42.295Z"

export const CTAddEntry = () => {
  const [state, setstate] = useState({
    name: "",
    votes: "",
    eligibleCandidateCounts: "",
    pricing: "",
    currency: "",
    avaibilityPeriodStart: "",
    avaibilityPeriodEnd: "",
    votingCampaignId: "",
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
            <Navbar name="Add Entry - CoupanTransaction" showBars />
          </div>

          <PrevBtn />
<div className="form-wrapper">
            <form className="form">

              
              <div className="input">
                <UIInput value={state.name} onChange={handelchange} name="name" label="Coupan Name" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.votes} onChange={handelchange} name="votes" label="Votes" type="number" />
              </div>
              <div className="input">
                <UIInput value={state.eligibleCandidateCounts} onChange={handelchange} name="eligibleCandidateCounts" label="Eligible Candidate" type="number" />
              </div>
              <div className="input">
                <UIInput value={state.pricing} onChange={handelchange} name="pricing" label="Pricing" type="text" />
              </div>

              <div className="input">
                <label>Currency</label>
                <select value={state.currency} name="currency" onChange={handelchange}>
                  <option>NRP</option>
                  <option>USD</option>
                </select>
              </div>
              <div className="input">
                <UIInput value={state.avaibilityPeriodStart} onChange={handelchange} name="avaibilityPeriodStart" label="AvaibilityPeriodStart" type="date" />
              </div>
              <div className="input">
                <UIInput value={state.avaibilityPeriodEnd} onChange={handelchange} name="avaibilityPeriodEnd" label="AvaibilityPeriodEnd" type="date" />
              </div>
              <div className="input">
                <UIInput value={state.votingCampaignId} onChange={handelchange} name="votingCampaignId" label="VotingCampaignID" type="text" />
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
