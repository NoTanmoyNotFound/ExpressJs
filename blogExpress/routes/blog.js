const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/post/:id', (req, res) => {
    const postId = req.params.id;
   
    res.render('post', { postId }); 
});


module.exports = router;
