import React, { useContext } from 'react'
import { SelectionContext } from '../../OverviewPage';

const TableUtils = () => {
    
    const selection = useContext(SelectionContext);

    return (
        <div className="flex flex-row pb-4 px-4 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight">
                {selection}
            </h2>
        </div>
    )
}

export default TableUtils
