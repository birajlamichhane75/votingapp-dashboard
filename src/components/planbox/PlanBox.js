import React from 'react';
import { FaRegCircleCheck } from "react-icons/fa6";

const PlanBox = ({dets}) => {
    return ( 
        <>
            <div className="plan-box">
                <div className="plan-box-top">
                    <p className="title">
                        {dets.toptitle}
                    </p>
                    <p className="desc">
                        {dets.topdesc}
                    </p>
                </div>
                <div className="plan-box-dets">
                    <h1><span className='prev-price'>Rs{dets.prevPrice}</span>Rs {dets.currentPrice}</h1>
                    <p>for {dets.timelimit}</p>

                    <ul className='plan-list'>
                        {
                            dets && dets.plansList.map((list,index)=>{
                                return (<li className={index}><p>{list}</p><span><FaRegCircleCheck className='icon' /></span></li>)
                            })
                        }
                        
   
                    </ul>
                </div>

                <div className="plan-box-bottom">
                    <button className='delete-button'>Delete plan</button>
                </div>
            </div>
        </>
     );
}
 
export default PlanBox;