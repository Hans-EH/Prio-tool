import React from 'react'

const StyledButton = (props) => {
    return (
        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-bluecity_dark rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
            {props.children}
        </button>
    )
}

export default StyledButton
