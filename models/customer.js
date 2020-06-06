const mongoose = require('mongoose');

// Customer schema
const customerSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String }
});

//Define and export
module.exports = mongoose.model('Customer', customerSchema);