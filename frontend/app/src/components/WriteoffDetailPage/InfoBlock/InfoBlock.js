import React from 'react'
import StyledContainer from '../../Global/StyledContainer/StyledContainer'

export const InfoBlock = (props) => {
    
    return (
        <StyledContainer>
            {props.data.length !== 0 && <>
            <h2 className="title-font font-bold mb-4 text-2xl text-bluecity_dark">Writeoff detail</h2>
            <div className="grid grid-cols-3 grid-rows-1 gap-4">
                <div className="p-3 col-start-1">
                    <h2 className="title-font font-medium text-xl text-gray-900">Lossed by:</h2>
                    <p>{props.data.technicianName}</p>
                </div>
                <div className="p-3 col-start-2">
                    <h2 className="title-font font-medium text-xl text-gray-900">Creation date:</h2>
                    <p>{props.data.creationDate.slice(0,10) + " " + props.data.creationDate.slice(11,19)}</p>
                </div>
                <div className="p-3 col-start-3">
                    <h2 className="title-font font-medium text-xl text-gray-900">Status:</h2>
                    <p>{props.data.state}</p>
                </div>
            </div>
            </>}
        </StyledContainer>

    )
}
