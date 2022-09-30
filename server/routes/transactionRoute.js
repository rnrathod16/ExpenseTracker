const express = require("express");
const route = express.Router();
const User = require("../models/userModel");

route.post("/new", async(req, res) => {
    const { name } = req.body;
    console.log(name);
    const inserted = new User({ name });
    const result = await inserted.save();

    if (result) {


        res.status(200).json("User Inserted");
    }
})

route.post("/update", async(req, res) => {
    const _id = "632e82a7e5d9d04cb0c450b2"
    const transc = req.body;
    // console.log(total);
    const data = await User.findByIdAndUpdate({ _id }, { $push: { transactions: transc } });

    if (data) {
        res.status(200).json(data);
    } else {
        res.status(500).json("not inserted trans");
    }

})

route.get("/request", async(req, res) => {
    const _id = "632e82a7e5d9d04cb0c450b2";

    const data = await User.findById({ _id });

    if (data) {
        return res.status(200).json(data);
    }
})

route.post("/delete", async(req, res) => {
    const _id = "632e82a7e5d9d04cb0c450b2"
    const idx = req.body;

    const data = await User.updateOne({
        _id: _id
    }, {
        $pull: {
            transactions: {
                _id: idx.id
            }
        }
    });

    if (data) {
        return res.status(200).json(data);
    }
})

module.exports = route;