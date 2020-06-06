const mongoose = require('mongoose');

//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//Connect to db
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    useMongoClient: true
});

//Import model
const Customer = require('./models/customer');

//Add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close();     //close it otherwise it will hang
    });
}

//Find customer
const findCustomer = (name) => {
    //Make case insensitive
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    })
}

