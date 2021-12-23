import React from 'react'
import OrderlistUtils from './OrderUtils/OrderlistUtils'
import OrderlistRow from './OrderRow/OrderlistRow'
import StyledContainer from '../../../Global/StyledContainer/StyledContainer';

const Orderlist = () => {

    return (
        <StyledContainer>
            <OrderlistUtils />
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
                <div className="inline-block min-w-full rounded-lg overflow-hidden pb-8">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    Order ID
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    PRODUCT
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    SKU NR.
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    TYPE
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    BRAND
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    QUANTITY
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    PRICE PER UNIT
                                </th>
                                <th scope="col" className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                                    DELIVERY DATE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderlistRow />
                            <OrderlistRow />
                            <OrderlistRow />
                            <OrderlistRow />
                            <OrderlistRow />
                            <OrderlistRow />
                            <OrderlistRow />
                        </tbody>
                    </table>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Orderlist
