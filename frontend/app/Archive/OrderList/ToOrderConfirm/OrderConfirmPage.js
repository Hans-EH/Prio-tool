import React from 'react'
import OrderSparepartConfirm from './OrderSparepartConfirm/OrderSparepartConfirm'

const OrderConfirm = () => {
    return (
        <div className="fixed w-full h-full inset-0">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-300 opacity-50">
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-2 bg-white p-8 opacity-100 min-h-screen shadow-xl">
                    <OrderSparepartConfirm/>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirm
