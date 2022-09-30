import axios from 'axios';
import React, { useEffect, useState } from 'react'
import List from './List';

const Form = () => {

    const [transc, setTransc] = useState({
        title: "",
        type: "",
        amount: ""
    })



    const handelInp = (e) => {
        const { name, value } = e.target;
        setTransc((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const postData = async (e) => {
        e.preventDefault();

        const { title, type, amount } = transc;

        if (!title || !type || !amount) {
            window.alert("Enter all Field")
            throw new Error("ENter all fields");
        }

        try {

            const data = await axios.post("http://localhost:5000/transaction/update", transc);

            if (data.status === 200) {
                console.log("data inserted transc");
            } else {
                console.log(`${data.status} not inserteff`);
            }

            setTransc({
                title: "",
                type: "",
                amount: ""
            });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="d-flex flex-column" style={{ width: "80%" }}>
                <div>
                    <h4 className='text-center mb-3'>Transactions</h4>

                    <form method='POST' onSubmit={postData}>
                        <div className="form-group mb-3">
                            <input type="text" className="form-control shadow" id="title" placeholder="Enter Title" name="title" value={transc.title} onChange={handelInp} />
                        </div>
                        <select className="custom-select mb-3 shadow" name="type" value={transc.type} onChange={handelInp}>
                            <option defaultValue>Select Transaction Type</option>
                            <option value="cash">Cash</option>
                            <option value="expense">Expense</option>
                            <option value="investment">Investment</option>
                        </select>
                        <div className="form-group mb-3 shadow">
                            <input type="number" className="form-control" id="amount" placeholder="Enter Amount" name="amount" value={transc.amount} onChange={handelInp} />
                        </div>
                        <div className="submit-btn">
                            <button type="submit" className="btn text-white border shadow" style={{ background: "indigo", width: "100%" }}>Add Entry</button>
                        </div>
                    </form>
                </div>
                <div>

                    <List />
                </div>
            </div>
        </>
    )
}

export default Form