/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import PrevBtn from "../../../../ui/prevbutton/BackBtn";
import Navbar from "../../../../components/navbar/Navbar";
import { UIInput } from "../../../../ui/uiinput/UIInput";
import { campaignStageData, votingCampaignData } from "../../../../constants/constants";
import UIButton from "../../../../ui/uibutton/UIButton";


export const CEditEntry = () => {
  const [state, setstate] = useState({
    "organizationID": "dccf2183a9ff686a",
    "name": "KrishnHari",
    "age": 20,
    "gender": "Male",
    "nationality": "Nepali",
    "weight": "45kg",
    "city": "Bhaktapur",
    "biography": "kjaghsdbakldasd",
    "profilePicture": "9a8ed7b8c23a2015",
    "socialMediaFacebook": "https://www.facebook.com",
    "socialMediaInstagram": "https://www.facebook.com",
    "socialMediaTwitter": "https://www.facebook.com",
    "campaignid": "vc001-Miss World",
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
            <Navbar name="Edit Entry - Candidate" showBars />
          </div>

          <PrevBtn />
          <div className="form-wrapper">
            <form className="form">

              <div className="input">
                <UIInput value={state.name} onChange={handelchange} name="name" label="Name" type="text" />
              </div>

              <div className="input">
                <label className="label">Voting Campaign</label>
                <select value={state.campaignid} onChange={handelchange} name="campaignid">
                  <option selected>Select Campaign</option>
                  {
                    votingCampaignData.map((stage, index) => {
                      return <option key={index}>{stage.id}-{stage.title}</option>
                    })
                  }
                </select>
              </div>

              <div className="input">
                <UIInput value={state.age} onChange={handelchange} name="age" label="Age" type="number" />
              </div>
              <div className="input">
                <label className="label">Gender</label>
                <select value={state.gender} onChange={handelchange} name="gender">
                  <option selected>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="input">
                <UIInput value={state.nationality} onChange={handelchange} name="nationality" label="Nationality" type="text" />
              </div>

              <div className="input">
                <UIInput value={state.weight} onChange={handelchange} name="weight" label="Weight in KG" type="text" />
              </div>

              <div className="input">
                <UIInput value={state.profilepic} onChange={handelchange} name="profilepic" label="Profile Picture" type="file" />
              </div>
              <div className="input">
                <UIInput value={state.socialMediaFacebook} onChange={handelchange} name="socialMediaFacebook" label="Facebook" type="name" />
              </div>
              <div className="input">
                <UIInput value={state.socialMediaInstagram} onChange={handelchange} name="socialMediaInstagram" label="Instagram" type="text" />
              </div>
              <div className="input">
                <UIInput value={state.socialMediaTwitter} onChange={handelchange} name="socialMediaTwitter" label="Twitter" type="text" />
              </div>



              <div className="input textarea">
                <label className="label">Biography</label>
                <textarea value={state.biography} onChange={handelchange} name="biography"></textarea>
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
