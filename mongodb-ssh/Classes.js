const mongoose = require('mongoose');

const ClassesSchema = mongoose.Schema({
    name: {
        name: String,
    },

});

const Classes = mongoose.model('classes', ClassesSchema);
module.exports = Classes;
