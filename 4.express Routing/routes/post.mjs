import express  from "express";
const router = express.Router();


// GET     /api/v1/post/:userId/:postId
router.get("/post/:userId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

// GET     /api/v1/posts/:userId
router.get("/posts/:userId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});


// POST    /api/v1/post
router.post("/post", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created', new Date() );
});


// PUT     /api/v1/post/:userId/:postId
router.put("/post/:userId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});

// DELETE  /api/v1/post/:userId/:postId
router.delete("/post/:userId/:postId", (req, res) => {
    console.log('this is singup', new Date());
    res.send('post created' + new Date());
});


export default router 