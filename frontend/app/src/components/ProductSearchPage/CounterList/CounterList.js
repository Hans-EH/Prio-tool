import React from 'react'
import Counter from './Counter/Counter'

const CounterList = ({ data, handleSeleted, stateSelected }) => {

    const counter_data = [{
        title: "Total Products",
        count: data.length,
        value: 0
    }, {
        title: "Defective",
        count: data.filter(product => product.state === 'DEFECTIVE').length,
        value: 1
    }, {
        title: "In Repair",
        count: data.filter(product => product.state === 'IN_REPAIR').length,
        value: 2
    }, {
        title: "Repaired",
        count: data.filter(product => product.state === 'REPAIRED').length,
        value: 3
    }, {
        title: "In writeoff",
        count: data.filter(product => product.state === 'IN_WRITEOFF').length,
        value: 4
    }, {
        title: "Written off",
        count: data.filter(product => product.state === 'WRITTEN_OFF').length,
        value: 5
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
