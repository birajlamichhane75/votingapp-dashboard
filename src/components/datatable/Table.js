import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const DataTable = ({ tableData }) => {
    return (
        <>
            <div className="table-wrapper-top">
                <Link to="/dashboard"><BsFillArrowLeftSquareFill className="icon" /></Link>
                <Link to={`addentry`}>
                    <button className="add-btn" style={{ display: "flex", alignItems: "center", gap: "1rem" }}><span><FaPlus /></span>Add Entry</button>
                </Link>
            </div>
            <div className="table-wrapper">
                <table className="table-wrapper-table" border={0}>
                    <thead>
                        <tr>
                            {
                                tableData && tableData.length > 0 ?
                                    <>
                                        <th>SN</th>
                                        {
                                            Object.keys(tableData[0]).map((col, index) => {
                                                return (<th key={index}>{col}</th>)
                                            })
                                        }
                                        <th>Action</th>
                                    </> :
                                    <><th>Data Not Found</th></>
                            }
                        </tr>
                    </thead>

                    <tbody className="table-body">
                        {tableData ?
                            tableData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        {
                                            Object.values(data).map((value, index) => {
                                                return (<td key={index}>{value}</td>)
                                            })
                                        }
                                        <td className="action">

                                            <Link to={`edit/${data.ID || data.Id || data.id}`}><button className="bttn edit-btn">Edit</button></Link>
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
}

export default DataTable;



