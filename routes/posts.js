const express = require('express'); 
const router = express.Router(); 
const Post = require('../models/Post'); 

//Get back of all the post from api 
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); 
        res.json(posts); 
    }catch(err){
        res.json({message: err})
    }
}); 

router.get('/specific', (req, res) => {
    res.send('Wow you made it to the specific route'); 
}); 

//Send/Create new post to api 
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title, 
        desc: req.body.desc
    }); 

    try{
    const savedPost = await post.save(); 
    res.json(savedPost); 
    }catch(err){
        res.json({message: err})
    }
}); 

//Get back a specfic post 
router.get('/:postId', async (req, res) => {
    try{
    const uniquePost = await Post.findById(req.params.postId); 
    res.json(uniquePost); 
    }catch(err){
        res.json({message: err}); 
    }
}); 

//Delete a specific post 
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id: req.params.postId}); 
    res.json(removedPost); 
    }catch(err){
        res.json({message: err}); 
    }
}); 

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne(
        {_id: req.params.postId}, 
        {$set : { title: req.body.title } });
    res.json(updatedPost); 
    }catch(err){
        res.json({message: err}); 
    }
}); 



//how we export the info 
module.exports = router; 
