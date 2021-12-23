import React from 'react'
import StyledContainer from '../../Global/StyledContainer/StyledContainer'
import SparepartTable from './SparepartTable/SparepartTable'

const SparepartBlock = (props) => {
    
    return (
        <StyledContainer>
            <h2 className="title-font font-bold mb-2 text-xl text-bluecity_dark">Spareparts marked functional</h2>
            <SparepartTable data={props.data}/>
        </StyledContainer>
    )
}

export default SparepartBlock
