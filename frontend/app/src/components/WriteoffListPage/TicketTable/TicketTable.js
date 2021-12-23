import React, { useState, useContext } from 'react';
import { ApiContext } from '../../../contexts/apiContext';
import { toast } from "react-toastify";
import TableRow from './TableRow/TableRow'
import TableUtils from './TableUtils/TableUtils'

const TicketTable = ({ data }) => {
    
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/writeoffs/");

    const pushApproveSuccess = () => {
        toast.success('Write-off approved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    const pushApproveError = () => {
        toast.error('Write-off couldn\'t be approved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    const handleApproveClick = (woId) => {

        fetch(apiLink + woId + "/approve", {
            method : "get"
        }).then(response => {
            if (response.ok) {pushApproveSuccess()}
            else {pushApproveError()}
        })
    }

    const pushDeclineSuccess = () => {
        toast.success('Write-off declined', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    const pushDeclineError = () => {
        toast.error('Write-off couldn\'t be declined', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

    const handleDeclineClick = (woId) => {

        fetch(apiLink + woId + "/disapprove", {
            method : "get"
        }).then(response => {
            if (response.ok) {pushDeclineSuccess()}
            else {pushDeclineError()}
        })
    }

    return (
        <div className="container col-span-4 mx-auto bg-white shadow-sm rounded-lg">
            <TableUtils />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Technician
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Product ID
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Creation date
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Status
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Details
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Approve
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Decline
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product,key) => {
                                return (<TableRow data={product} key={key} handleApproveClick={handleApproveClick} handleDeclineClick={handleDeclineClick}/>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TicketTable
