import React from 'react'
import Counter from './Counter/Counter'

const CounterList = ({ data, handleSeleted, stateSelected }) => {

    const counter_data = [{
        title: "Total  Repairs",
        count: data.length,
        value: 0
    }, {
        title: "Total On-going Repairs",
        count: data.filter(repair => repair.state === 'ON_GOING').length,
        value: 1
    }, {
        title: "Total Paused Repairs",
        count: data.filter(repair => repair.state === 'PAUSED').length,
        value: 2
    }, {
        title: "Total Finished Repairs",
        count: data.filter(repair => repair.state === 'FINISHED').length,
        value: 3
    }]


    return (
        <div>
            {counter_data.map((data, key) => {
                return (
                    <div key={key}>
                        {data.value === stateSelected ?
                            <Counter data={data} handleSeleted={handleSeleted} selected={true} /> :
                            <Counter data={data} handleSeleted={handleSeleted} selected={false} />
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default CounterList
