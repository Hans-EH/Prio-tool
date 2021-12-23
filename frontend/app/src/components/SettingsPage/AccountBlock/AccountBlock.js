import React from 'react'
import StyledContainer from '../../Global/StyledContainer/StyledContainer'

const AccountBlock = (props) => {
    return (
        <StyledContainer>
            <h3 className="font-bold text-2xl mb-4">Account Information</h3>
            <form className="container">
                <div className="space-y-3 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Full Name:
                        </h2>
                        <div className="max-w-sm md:w-2/3">
                            <p className="relative">
                                {props.user.username} ({props.user.initials})
                            </p>
                        </div>
                    </div>

                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Role:
                        </h2>
                        <div className="max-w-sm md:w-2/3">
                            <p className="relative">
                            {props.user.userPrivilege === "FULL_ACCESS" ? <>Manager</> : <> Technician </>}
                            </p>
                        </div>
                    </div>

                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Date Registered:
                        </h2>
                        <div className="max-w-sm md:w-2/3">
                            <p className="relative">
                                {props.user.dateRegistered}
                            </p>
                        </div>
                    </div>


                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex justify-between md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Employment Time:
                        </h2>
                        <div className="max-w-sm md:w-2/3">
                            <p className="relative">
                                {props.user.employmentTime} days
                            </p>
                        </div>
                    </div>

                </div>
            </form>
        </StyledContainer>
    )
}

export default AccountBlock
