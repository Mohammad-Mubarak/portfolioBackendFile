const { Schema } = require("mongoose")
const mongoose = require("mongoose")

const data = new Schema({
title: String,
img: String,
description: String,
technologies: String,
link: String,
github: String,
});

module.exports = mongoose.model('data',data);