const express = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description:{
        type: String, required: true
    },
    requirements:{
        type: [String], required: true
    },
    location:{
        type: String, required: true
    },
    company:{
        type: String, required: true
    },
    jobType:{
        type: String, enum: ['full-time', 'part-time', 'contract'], required: true
    }, 
    salary:{
        type: Number
    },
    datePosted:{
        type: Date, default: Date.now
    },
    applicationDeadline:{
        type: Date
    }     
})



module.exports = mongoose.model("Product", productSchema);
