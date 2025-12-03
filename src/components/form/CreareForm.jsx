/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { UIInput } from '../../ui/uiinput/UIInput';

const CreateForm = ({ inputDets }) => {
    const [state, setstate] = useState(
        inputDets.forEach((e)=>{
            e.name = ""
        })
    );
    return (
        <>
            <div className='form-wrapper'>
                <form className='form'>
                    {
                        inputDets.map((input, index) => {
                            return (
                                <div className="name input" key={index}>
                                    {
                                        input.type === "select" ?
                                            <>
                                                <label>{input.label}</label>
                                                <select className='select'>
                                                    {
                                                        input.option.map((opt) => {
                                                            return (
                                                                <option>{opt}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </> :
                                            input.type === "textarea" ?
                                                <>
                                                    <label>Description</label>
                                                    <textarea className='desc'></textarea>
                                                </>
                                                :
                                                <UIInput label={input.label} type={input.type} />
                                    }
                                </div>)
                        })
                    }

                </form>
            </div>
        </>
    );
}

export default CreateForm;