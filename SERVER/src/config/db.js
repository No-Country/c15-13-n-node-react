//Config database connection
const mongoose = require('mongoose');
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const dbConnect = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`);
        console.log("Database connected...")    
    } catch (error) {
        console.log(error);
        throw new Error("Wrong conection...")
    }
}

module.exports = { dbConnect }; 