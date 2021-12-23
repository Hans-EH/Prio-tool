import React from 'react'

const GridChildContainer = (props) => {
    return (
        <section className="bg-white shadow-sm py-8 rounded-md">
            <div className="container px-8 mx-auto">
                {props.children}
            </div>
        </section>
    )
}

export default GridChildContainer
