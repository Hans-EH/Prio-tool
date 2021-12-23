import React from 'react'

export const SidebarMenu = () => {

    let states = [{
        "text": "defective",
        "value": "DEFECTIVE"
    }, {
        "text": "in repair",
        "value": "IN_REPAIR"
    }, {
        "text": "in writeoff",
        "value": "IN_WRITEOFF"
    }, {
        "text": "written off",
        "value": "WRITTEN_OFF"
    }, {
        "text": "repaired",
        "value": "REPAIRED"
    }]


    return (
        <div>
            <div className='p-4 bg-white rounded-lg'>
                <h2>States</h2>
                <ul className='border-t border-color-bluecity_dark'>
                    {states.map((state, key) => {
                        return (
                            <li className="flex align-center items-center px-4 py-2" key={key}>
                                <input type="checkbox" className="form-checkbox mr-2" name={state.value} defaultChecked/>
                                <label className='' htmlFor={state.value}>{state.text}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}
