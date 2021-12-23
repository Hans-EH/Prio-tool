import React from 'react'
import ConfirmTableRow from './ConfirmTableRow'

const ConfirmTable = () => {
    return (
        <div class="container mx-auto max-w-3xl">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full border border-gray-100 rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Part
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Role
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    Created at
                                </th>
                                <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-100 text-gray-800  text-left text-sm uppercase font-normal">
                                    status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ConfirmTableRow/>
                            <ConfirmTableRow/>
                            <ConfirmTableRow/>
                            <ConfirmTableRow/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ConfirmTable
