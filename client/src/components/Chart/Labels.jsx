import React, { useEffect, useState } from 'react'
import { getAvail, getLabels, getSum } from '../../helper/helper'

const obj = [
    {
        color: "green",
        type: "Savings",
        percentage: 45
    }, {
        color: "red",
        type: "Expenses",
        percentage: 20
    }, {
        color: "Blue",
        type: "Investments",
        percentage: 10
    }
]


const Labels = () => {

    // let data;

    const [l, setl] = useState()


    const da = JSON.parse(localStorage.getItem('transactions'));

    // console.log(getAvail(da.transactions));
    const getColor = (type) => {
        return type === "cash" ? "green" : type === "expense" ? "red" : "blue"
    }

    useEffect(() => {
        setl({});
    }, [])
    return (
        <>
            {getSum(da.transactions, 'type').map((val, id) => {
                const color = getColor(val.type);
                return <LabelComponent key={id} data={val} color={color} />
            })}
        </>
    )
}


function LabelComponent({ data, color }) {
    if (!data) return <></>;
    return (
        <div className="d-flex justify-content-center rounded shadow p-2 m-2" style={{ borderLeft: `8px solid ${color}` }}>
            <span className='d-block w-100'>{data.type.toUpperCase() ?? ''}</span>
            <span className='d-block w-100 text-right' style={{ color: color }}>{data.total ?? ''} Rs</span>

        </div>
    )
}
export default Labels