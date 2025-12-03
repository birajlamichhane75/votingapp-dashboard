
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

export const VotingCampaignEditEntry = () => {
  const [state, setstate] = useState({
    "title": "tow",
    "description": "ahdfsdasd",
    "logo": "3205126abc8e3267",
    "banner": "a87f394ab91bae99",
    "startDateTime": "2024-03-30T07:45:21.894Z",
    "endDateTime": "2024-03-31T07:49:21.894Z",
    "timeZone": "ABC",
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
            <Navbar name="Edit Entry - Voting Campaign" showBars />
          </div>

          <PrevBtn />
<div className="form-wrapper">
            <form className="form">

              <div className="input">
                <UIInput value={state.title} onChange={handelchange} name="title" label="Title" type="text" />
              </div>

              <div className="input">
                <UIInput value={state.logo} onChange={handelchange} name="logo" label="Logo" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.banner} onChange={handelchange} name="banner" label="Banner" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.startDateTime} onChange={handelchange} name="startDateTime" label="StartDate" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.endDateTime} onChange={handelchange} name="endDateTime" label="EndDate" type="text" />
              </div>

              <div className="input textarea">
                <label className="label">Description</label>
                <textarea value={state.description} name="description" onChange={handelchange}></textarea>
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


