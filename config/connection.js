const mongoose = require('mongoose')

const connection_string=process.env.CONNECTIONSTRING

mongoose.connect(connection_string).then((res)=>{
    console.log('MongoBD atlas connected succesfully with pf server');
}).catch(err=>{
    console.log('Connection Failed');
    console.log(err);  
})