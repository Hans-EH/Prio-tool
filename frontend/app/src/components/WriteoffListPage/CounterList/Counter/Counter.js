import React from 'react'

const Counter = (stat) => {
    return (

        <div className="rounded-lg mb-4 p-4 bg-white shadow-sm dark:bg-gray-800">
            <div className="flex items-center">
                <p className="text-md text-black dark:text-white">
                    {stat.data.title}
                </p>
            </div>
            <div className="flex flex-col justify-start">
                <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold mt-2 mb-4">
                    {stat.data.count}
                    <span className="text-sm ml-2">
                        tickets
                    </span>
                </p>
            </div>
        </div>

    )
}

export default Counter
