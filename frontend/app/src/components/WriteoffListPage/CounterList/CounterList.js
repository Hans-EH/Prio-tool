import React from 'react'
import Counter from './Counter/Counter'

const CounterList = ({data}) => {

    const counter_data = [{
        title: "Total Tickets:",
        count: data.length
    }]

    return (
        <div>

            {counter_data.map((data, key) => {
                return (
                    <Counter data={data} key={key}/>
                )
            })}
        </div>
    )
}

export default CounterList
