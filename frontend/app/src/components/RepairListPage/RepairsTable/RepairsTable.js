import React from 'react'
import TableRow from './TableRow/TableRow'
import TableUtils from './TableUtils/TableUtils'

const RepairsTable = ({ data }) => {
    return (
        <div className="container col-span-4 mx-auto bg-white pb-8 rounded-lg">
            <TableUtils />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Id
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Product
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Started
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Status
                                </th>
                                <th scope="col" className="px-5 py-3   border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((repairData) => {
                                return (<TableRow data={repairData} key={repairData.id}/>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default RepairsTable
