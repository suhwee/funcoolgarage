const express = require('express');
const app = new express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://bsuh:bums9321@192.168.4.55:27017/my_database?authSource=admin&readPreference=primary&ssl=false',{useNewUrlParser:true});

const BlogPost = require('./models/BlogPost');

// ejs
const ejs = require('ejs');
app.set('view engine','ejs');

// const path = require('path');
app.use(express.static('public'));

// For An old version express.js
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log('App listening on port 3000');
})

app.get('/',async(req,res)=>{
    const blogposts = await BlogPost.find({});
    res.render('index',{
        blogposts
    });
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.get('/posts/new',(req,res)=>{
    res.render('create');
})

app.post('/posts/store',(req,res)=>{
    BlogPost.create(req.body,(error,blogpost)=>{
        res.redirect('/');
    })
})

app.get('/post/:id',async(req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post',{
        blogpost
    })
})