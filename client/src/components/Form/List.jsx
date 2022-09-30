import React, { useContext, useState } from 'react'
import 'boxicons';
import "./List.css"
import { useEffect } from 'react';
import axios from 'axios'
import { getLabels } from '../../helper/helper';
import { newContext } from '../../App';
// const obj = [
//     {
//         color: "green",
//         name: "Savings"
//     }, {
//         color: "red",
//         name: "Expenses"
//     }, {
//         color: "Blue",
//         name: "Investments"
//     }, {
//         color: "Blue",
//         name: "Investments"
//     }, {
//         color: "Blue",
//         name: "Investments"
//     }, {
//         color: "Blue",
//         name: "Investments"
//     }
// ]

const List = () => {

    const [list, setlist] = useState();
    const { setdm } = useContext(newContext);

    let da;
    const getData = async () => {
        const result = await axios.get("http://localhost:5000/transaction/request");

        localStorage.setItem('transactions', JSON.stringify(result.data));
        setdm(result.data)
    }

    useEffect(() => {
        getData();
    })


    da = JSON.parse(localStorage.getItem('transactions'));
    getLabels(da.transactions);
    const getColor = (type) => {
        return type === "cash" ? "green" : type === "expense" ? "red" : "blue"
    }

    const deleteNote = async (idn) => {
        const idx = { id: idn };
        // console.log(idx);
        const result = await axios.post("http://localhost:5000/transaction/delete", idx);

    }

    return (
        <>
            {da.transactions.length === 0 ? <h4 className='text-center mt-5'>No Transactions</h4> : <div className="d-flex flex-column">
                <h4 className='text-center mt-5'>History</h4>
                <div className='scrol'>
                    {da.transactions.map((val, i) => {
                        const color = getColor(val.type);
                        return <Transactions category={val} key={i} color={color} fun={deleteNote} />
                    })}

                </div>
            </div>}

        </>
    )
}

function Transactions({ category, color, fun }) {

    const fu = () => {
        fun(category._id);
    }

    if (!category) return null;
    return (
        <div className="d-flex justify-content-center rounded shadow p-2 m-2" style={{ borderLeft: `8px solid ${color ?? ""}` }}>
            <span className='d-block w-100'>{category.title ?? ''} </span>
            <span className='d-block w-100' style={{ color: `${color}` }}>{category.amount ?? ''} Rs</span>
            <button className='butn' onClick={fu}><box-icon size="20px" color={"red"} name="trash" /></button>

        </div>
    )
}

export default List