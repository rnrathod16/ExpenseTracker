import React from 'react'
import Graph from '../Chart/Graph';
import Form from '../Form/Form'

const Expense = () => {

    return (
        <>
            <div className="container row ml-auto mr-auto mt-5" style={{ height: "72vh" }}>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <Graph />
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Expense