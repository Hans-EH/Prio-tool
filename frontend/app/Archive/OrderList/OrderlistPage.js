import React, {useState} from 'react'
import Orderlist from './OnOrderList/OrderTable/OrderTable';
import OrderConfirm from './ToOrderConfirm/OrderConfirmPage';
import Ordersparepart from './ToOrderList/OrderSparepartTable/OrderSparepartTable';

export const ActiveContext = React.createContext();

function OrderlistPage() {

    const [active] = useState(false);
    return (
        <>
            <Orderlist />
            <Ordersparepart/>

            {active && <OrderConfirm/>}
        </>
    )
}

export default OrderlistPage
