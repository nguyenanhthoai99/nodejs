const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        console.log('connect thành cônng');
    } catch (error) {
        console.log('connect thất bại');
    }
}

module.exports = { connect };
