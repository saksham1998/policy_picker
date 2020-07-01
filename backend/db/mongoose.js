const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/letsendorseTask`,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then((data)=>console.log('Database Connected'))
.catch(e => {
    console.log('Error Occured while connecting to the database')
    process.exit()  
    }
);

module.exports = mongoose;