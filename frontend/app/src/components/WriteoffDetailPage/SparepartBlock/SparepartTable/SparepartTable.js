import React from 'react'
import SparepartTableRow from './SparepartTableRow'

const SparepartTable = (props) => {
    
    return (
        <div className="container mx-auto max-w-3xl">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full border border-gray-100 rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Part ID
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Origin ID
                                </th>
                                <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.spareParts !== undefined && <>
                                {props.data.spareParts.length > 1 ?
                                <>
                                    {
                                        props.data.spareParts.map((item, key) => {
                                            return (
                                                <SparepartTableRow data={item} key={key} />
                                            )
                                        })
                                    }
                                </> :
                                <SparepartTableRow data={props.data.spareParts}/>
                                }
                                </>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default SparepartTable
