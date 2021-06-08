const mongoose = require('mongoose'); 

const PostSchema = mongoose.Schema({
    title: {
        type:String, 
        required: true
    }, 
    desc: {
        type: String, 
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});


//export our file and pass a name for our model and the schema it will use
module.exports = mongoose.model('Posts', PostSchema); 
