import React from 'react'

import StyledContainer from '../../Global/StyledContainer/StyledContainer';
import ProductTypeDescriptor from '../../Global/Descriptors/Descriptors';

export const ProductBlock = (props) => {

    
    return (
        <StyledContainer>
            
            <div className="grid grid-cols-2 md:grid-cols-5">
                {props.data.product !== undefined && <>
                    <ProductTypeDescriptor type={props.data.product.category} />

                    <div className="px-4 md:col-start-2 md:col-span-4 flex justify-between flex-wrap">

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2">Product Id:</p>
                            <p className="font-light">{props.data.product.productId}</p>
                        </div>

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2">State:</p>
                            <p className="font-light font-mono">{props.data.product.state}</p>
                        </div>

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2 mb-0">Date added:</p>
                            <p className="font-light">{props.data.product.dateAdded}</p>
                        </div>

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2">Cost Price:</p>
                            <p className="font-light">{props.data.product.costPrice} DKK</p>
                        </div>

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2">Stock days:</p>
                            <p className="font-light">{props.data.product.storageTime}</p>
                        </div>

                        <div className="w-1/2 mb-3">
                            <p className="font-bold mr-2">Sales Price:</p>
                            <p className="font-light">{props.data.product.salesPrice} DKK</p>
                        </div>

                        <div className="mb-3">
                            <p className="font-bold mr-2">Defective Comment</p>
                            <p className="font-light break-words">
                                {props.data.product.defectiveComment == null ? <>undefined</> : <>{props.data.product.defectiveComment}</>}
                            </p>
                        </div>
                    </div>
                </>}
            </div>
            

        </StyledContainer>
    )
}