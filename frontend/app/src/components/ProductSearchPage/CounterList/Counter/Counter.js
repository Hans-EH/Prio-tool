import React from 'react'

const Counter = ({data, handleSeleted, selected}) => {
    return (
        <div onClick={()=> {handleSeleted(data.value)}} className={`rounded-lg mb-4 p-4 bg-white ${selected && "ring ring-offset-2"} shadow-sm dark:bg-gray-800 cursor-pointer`}>
            <div className="flex items-center">
                <p className="text-md font-semibold text-gray-600 dark:text-white">
                    {data.title}
                </p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold mt-2 mb-4">
                    {data.count}
                    <span className="text-sm ml-2">
                        products
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Counter
