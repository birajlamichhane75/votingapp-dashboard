import React from 'react';
import { Link } from 'react-router-dom';
import { MdHowToVote } from "react-icons/md";
import { GoOrganization } from "react-icons/go";


const Counter = () => {
    return (
        <>
            <div className="dashboard">
             

              <div className="dashboard-analytics">
                <Link to="/organizations" className="dashboard-analytics--card">
                  <div className="dashboard-analytics--card_icon">
                    <GoOrganization />
                  </div>
                  <h2>Organizations</h2>
                  
                  <h1>0</h1>
                </Link>

                <Link to="/user" className="dashboard-analytics--card">
                  <div className="dashboard-analytics--card_icon">
                    <i className="fa-regular fa-users"></i>
                  </div>
                  <h2>Users</h2>
                  
                  <h1>0</h1>
                </Link>

                <Link to="/polls" className="dashboard-analytics--card">
                  <div className="dashboard-analytics--card_icon">
                    <MdHowToVote className='icon'/>
                  </div>
                  <h2>Voting Polls</h2>
                  
                  <h1>0</h1>
                </Link>

                <Link to="/candidate" className="dashboard-analytics--card">
                  <div className="dashboard-analytics--card_icon">
                    <i className="fa-regular fa-memo-circle-check"></i>
                  </div>
                  <h2>Contestants</h2>
                  
                  <h1>0</h1>
                </Link>

                <Link to="/voters" className="dashboard-analytics--card">
                  <div className="dashboard-analytics--card_icon">
                    <i className="fa-regular fa-memo-circle-check"></i>
                  </div>
                  <h2>Voters</h2>
                  
                  <h1>0</h1>
                </Link>
               
              </div>
            </div>
        </>
    );
}

export default Counter;