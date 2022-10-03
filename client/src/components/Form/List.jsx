import React, { useContext, useState } from 'react'
import 'boxicons';
import "./List.css"
import { useEffect } from 'react';
import axios from 'axios'
import { newContext } from '../../App';

const List = () => {

    // const [list, setlist] = useState([]);
    const { setdm, dm, setCount } = useContext(newContext);

    // const getData = async () => {

    //     try {
    //         const result = await axios.get("http://localhost:5000/transaction/request");

    //         setlist(result.data.do);
    //         setdm(result.data.do);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // }, [])

    // console.log(list);
    // getLabels(list);
    const getColor = (type) => {
        return type === "cash" ? "green" : type === "expense" ? "red" : "blue"
    }

    const deleteNote = async (idn) => {
        const idx = { id: idn };
        // console.log(idx);
        const token = localStorage.getItem('token')
        const result = await axios.post("http://localhost:5000/transaction/delete", { idx, token });

        if (result) {
            setCount(50);
            console.log("Transaction Deleted");
        }
    }

    return (
        <>
            <div className="d-flex flex-column">{dm.length === 0 ? <h4 className='text-center mt-5'>No Transactions</h4> :
                <><h4 className='text-center mt-5'>History</h4>
                    <div className='scrol'>
                        {dm.map((val, i) => {
                            const color = getColor(val.type);
                            return <Transactions category={val} key={i} color={color} fun={deleteNote} />
                        })}

                    </div></>}
            </div>

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