import React from 'react'
import { Link } from "react-router-dom"

import { BiArrowBack } from 'react-icons/bi'
import StyledButton from '../../../Global/StyledButton/StyledButton'
import ConfirmTable from './ConfirmTable/ConfirmTable'

const OrderSparepartConfirm = () => {
    return (
        <div className="mt-4 md:px-12 space-y-6">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <StyledButton>
                    < BiArrowBack className="text-xl" />
                    </StyledButton>
                </Link>
                <div className="flex flex-col max-w-sm md:space-y-0 justify-center ">
                    <h1 className="font text-xl">Place order in System</h1>
                </div>
                <div className=""></div>
            </div>

            <form className="space-y-6">
            
            <ConfirmTable/>

            <div>
                <h2>Order placed by:</h2>
            </div>

            <StyledButton type="submit">Place order</StyledButton>
            </form>
        </div>
    )
}

export default OrderSparepartConfirm
