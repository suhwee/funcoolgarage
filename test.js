const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

// mongoose.connect('mongodb://bsuh:bums9321@192.168.4.55:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser:true});
mongoose.connect('mongodb://bsuh:bums9321@192.168.4.55:27017/my_database?authSource=admin&readPreference=primary&ssl=false',{useNewUrlParser:true});

BlogPost.create({
    title: "What a day!",
    abstract: "What a beautiful day",
    body: "if you have been here a long time, you might remember when I went on ITV Tonight to despense a masterclass in saving money on energy bills."
},(error,blogpost)=>{
    console.log(error,blogpost)
})