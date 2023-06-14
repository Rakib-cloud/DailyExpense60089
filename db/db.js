const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://mislam172131:n1CjwO8labMpgYMt@cluster0.c3lhcfg.mongodb.net/?retryWrites=true&w=majority")
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}