const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
            UseNewurlParser: true,
            UseUnifiedTopology:true,
    }).then(() => {console.log('Database Connection Successful!!!')})
    .catch((error) => {
        console.log('Error connecting with Database!!!')
        console.error(error.message)
        process.exit(1)
}); 
}

module.exports = dbConnect;