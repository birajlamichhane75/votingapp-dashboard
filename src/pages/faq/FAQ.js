/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { UIInput } from "../../ui/uiinput/UIInput";
import UIButton from "../../ui/uibutton/UIButton";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export const FAQ = () => {
  const [faq, setfaq] = useState([
    {
      'question': "Can I use my existing WhatsApp number?",
      'answer': "Yes, you can use an existing WhatsApp number. However, before onboarding, you must first delete the WhatsApp account linked to that number. If you wish to back up your WhatsApp text messages so that you can restore to WhatsCRM, you can use our Chat backup plugin."
    },
    {
      'question': "Can I use my existing WhatsApp number?",
      'answer': "Yes, you can use an existing WhatsApp number. However, before onboarding, you must first delete the WhatsApp account linked to that number. If you wish to back up your WhatsApp text messages so that you can restore to WhatsCRM, you can use our Chat backup plugin."
    },
    {
      'question': "Can I use my existing WhatsApp number?",
      'answer': "Yes, you can use an existing WhatsApp number. However, before onboarding, you must first delete the WhatsApp account linked to that number. If you wish to back up your WhatsApp text messages so that you can restore to WhatsCRM, you can use our Chat backup plugin."
    }
  ]);

  const [state, setstate] = useState(
    {
      question: "",
      answer: ""
    }
  );
  let handlechange = (e) => {
    let value = e.target.value;
    setstate((prev) => ({ ...prev, [e.target.name]: value ?? "" }))
  }

  let submithandler = () => {
    console.log(state.question, state.answer);
  }
  return (
    <>
      <div className="framecontainer">
        <Sidebar />

        <div className="framecontainer-content">
          <div className="dashboard">
            <Navbar name="FAQ" showBars />
          </div>

          <div className="faq-page">
            <div className="add-qa">
              <p>Add or delete FAQs</p>

              <div className="add-qa-input">
                <UIInput
                  name="Question"
                  onChange={handlechange}
                  type="text" value={state.title} label="Question"
                />
                <UIInput
                  name="Answer"
                  onChange={handlechange}
                  type="text" value={state.title} label="Answer"
                />

                <UIButton onClick={submithandler} label="Add" style={{color: "white" }} className="btn-primary"/>
              </div>
            </div>

            <div className="display-faq">
              <ul className="faq-lists">
                {
                  faq.map((item,index)=>{
                    return <li key={index}>
                    <span className="question-wrapper"><p className="question"><span><FaRegQuestionCircle /></span>{item.question}</p> <MdDeleteOutline className="del-icon" /></span>
                    <p className="answer">{item.answer}</p>
                  </li> 
                  })
                }
                
              
              </ul>
            </div>
          </div>



        </div>
      </div>
    </>
  );
};
